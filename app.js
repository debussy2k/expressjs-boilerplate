/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var lessMiddleware = require('less-middleware');
var less = require('less');

var app = module.exports = express.createServer();

// Configuration  
app.configure(function() {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.set('view options', {
        layout: false
    });
    app.use(express.bodyParser()); // for parsing POST data
    app.use(express.methodOverride());
    // less파일을 css파일로 변환시킴.
    app.use(lessMiddleware({
        src      : __dirname + "/public",
        compress : false
    }));
    app.use(express.cookieParser());
    app.use(express.session({
        secret: 'keyboard cat'
    }));

    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
    app.use(express.static(__dirname));
});

app.configure('development', function() {
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
});

app.configure('production', function() {
    app.use(express.errorHandler());
});




// Routes
app.get('/', routes.index); // --> "export.index in routes/index.js" 


app.listen(3000, function() {
//app.listen(process.env.C9_PORT, function() {
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});