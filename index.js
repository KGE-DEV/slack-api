const
    express = require('express'),
    app = express(),
    dotenv = require('dotenv').config(),
    PORT = 3000,
    bodyParser = require('body-parser'),

    clapifyRoutes = require('./routes/clapifyRoutes.js')


    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    app.use(bodyParser.json())

    // Apply Routes
    app.use('/clapify', clapifyRoutes);

    app.listen(process.env.PORT || PORT, function(){
        console.log("Connected on port " + PORT);
    })