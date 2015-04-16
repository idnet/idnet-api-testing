var express = require('express')
var app = express()
var fs = require('fs');

var clientid = 'APP ID';
var secret = 'APP SECRET';
var site = 'http://192.168.56.101:3000/';
var redirect = 'http://localhost:2900/oauth/';

var template;

fs.readFile( __dirname + '/content.html', 'utf8', function (err, data) {
	template = data;
	app.get('/', function (req, res) {
		var link1 = '<a href="'+site+'/oauth/login?client_id='+clientid+'&response_type=token&redirect_uri='+encodeURIComponent(redirect)+'">Login</a>';
		var link2 = '<a href="'+site+'/oauth/choose_identity?client_id='+clientid+'&response_type=token&redirect_uri='+encodeURIComponent(redirect)+'">Choose Identity</a>';
		var content = data.split('%%body%%').join(link);
		res.send(content)
	})
});

app.listen(2900)