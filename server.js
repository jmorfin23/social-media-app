import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server'; 
import { App } from './src/App';
import bodyParser from 'body-parser'; 
import { HTMLTemplate } from './template'; 
import { Helmet, HelmetProvider } from 'react-helmet-async' 
import { StaticRouter } from 'react-router'; 
import { Provider } from 'react-redux'; 
import { createStore  } from 'redux'; 
import { rootReducer } from './src/reducers'; 


const PORT = process.env.PORT || 5000; 
const app = express(); 

app.use(bodyParser.json()); 
app.use(express.static("dist/public"));

app.get('*', (req, res) => {
  const context = {}; 
  const helmetContext = {}; 

  // Create a new Redux store instance
  const store = createStore(rootReducer)

  // Render the component to a string
  const component = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <HelmetProvider context={helmetContext}>
          <App />
        </HelmetProvider>
      </StaticRouter>
    </Provider>
  );
  
  // Get initial state from redux store
  const preloadedState = store.getState(); 
  
  const { helmet } = helmetContext; 
  const html = HTMLTemplate(component, helmet, preloadedState); 
  res.send(`<!DOCTYPE html>${html}`);

})

app.listen(PORT, () => console.log(`server started on port ${PORT}`)); 

