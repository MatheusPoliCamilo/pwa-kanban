const http = require('http');
// let fs = require('fs');
const express = require('express');
const app = new express();

app.use("/public", express.static(__dirname + '/public/'));
app.use("/sw.js", express.static(__dirname + '/public/sw.js'));

app.get('/', function (request, response) {
  response.sendFile('index.html', { root: `${__dirname}/public/` });
});

app.get('/favicon.ico', async function (req, res) {
  res.redirect(301, '/public/img/favicon.ico')
});

app.listen(3000, '0.0.0.0', function () {
  console.log('Running')
});
