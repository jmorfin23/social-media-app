import React from 'react';
import express from 'express';
import bodyParser from 'body-parser'; 
import createStore from './src/helpers/createStore'; 
import renderer from './src/helpers/renderer'; 

const PORT = process.env.PORT || 5000; 
const app = express(); 

app.use(bodyParser.json()); 
app.use(express.static("dist/public"));

app.get('*', (req, res) => {
  const store = createStore(); 
  
  res.send(renderer(req.path, store));
})

app.listen(PORT, () => console.log(`server started on port ${PORT}`)); 

