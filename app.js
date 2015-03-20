var express  = require('express')
var app    = express()
var server = require('http').createServer(app)
var cons = require('consolidate');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');


app.set('views', './public');
app.engine('html', cons.handlebars);
app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.use(session({ 
	secret: "dfI3dD43220jhsdjjjsdkoen",
	resave: false,
	saveUninitialized: true,
}));

var config = require("./config");
var routers = require("./router")(app);
var port = process.env.OPENSHIFT_NODEJS_PORT || 2518 ;
var ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
//console.log(global);
server.listen(port, ip);

console.log("App Started:"+port);
