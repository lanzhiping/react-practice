const express = require('express');

express()
    .use()
    .get('/', (req, res) => {
        res.send(`
            <html>
                <head>
                    <title>React App</title>
                </head>
                <body>
                    <div id="root"></div>
                    <script defer src="/static/js/bundle.js"></script>
                </body>
            </html>
        `)
    })
    .listen(3002, () => console.log('server started at 3002'))