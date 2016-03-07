var express = require('express');
var app = express();

function logRequest(req, res, next) {
	console.log('Incoming request at ' + new Date());
	next();
}

app.use(logRequest);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});