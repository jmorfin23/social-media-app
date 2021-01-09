import React from 'react'; 
import { Helmet } from 'react-helmet-async'; 

export default (html, helmet, preloadedState) => {
    return(
        `
        <html lang="en" dir="ltr">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            ${helmet.title.toString()}
        </head>
        <body>
            <div id="root">${html}</div>
            
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
                    /</g,
                    '\\u003c'
                )}
            </script>
            <script src="client_bundle.js"></script>
        </body>
        </html>
    `
    )
}