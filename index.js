var express = require('express')
var app = express()
var fs = require('fs');

var clientid = 'APP ID';
var secret = 'APP SECRET';
var site = 'http://192.168.56.101:3000/';
var redirect = 'http://localhost:2900/oauth/';

app.get('/', function (req, res) {
	fs.readFile( __dirname + '/content.html', 'utf8', function (err, data) {
		var link = '<a href="'+site+'/oauth/login?client_id='+clientid+'&response_type=token&redirect_uri='+encodeURIComponent(redirect)+'">Login</a>';
		var content = data.split('%%body%%').join(link);
		res.send(content)
	})
});

app.get('/oauth/', function (req, res) {
	fs.readFile( __dirname + '/content.html', 'utf8', function (err, data) {
			fs.readFile( __dirname + '/apis.html', 'utf8', function (err, apis) {
			var content = data.split('%%body%%').join(apis);
			content = content.split('%%site%%').join(site);
			res.send(content)
		})
	})
});

app.listen(2900)