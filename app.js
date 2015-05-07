var express	= require('express'),
	app 	= express(),
	server	= require('http').createServer(app),
	redis	= require('redis'),
	bodyParser	= require('body-parser'),
	cookieParser= require('cookie-parser'),
	session		= require('express-session'),
	client 		= redis.createClient(),
	colors		= require('colors'),
	redisStore	= require('connect-redis')(session);


app.use(express.static('public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser());

app.use(session(
	{
		secret: '4815162342x1x2', 
		store: new redisStore({ host: 'localhost', port: 6379, client: client }),
		saveUninitialized: false, 
		resave: false 
}));
var config = require("./system/config");
var routers = require("./system/router")(app);
var port = process.env.PORT || 2518 ;
var ip = process.env.HOST || "127.0.0.1";

server.listen(port, ip);

console.log("APP START:"+ip+':'+port);
