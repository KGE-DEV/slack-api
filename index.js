const
    express = require('express'),
    app = express(),
    dotenv = require('dotenv').config(),
    PORT = 3000,
    clapifyRoutes = require('./routes/clapifyRoutes.js')

    // Apply Routes
    app.use('/clapify', clapifyRoutes);

    app.listen(process.env.PORT || PORT, function(){
        console.log("Connected on port " + PORT);
    })