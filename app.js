const express = require('express');
const app = new express();

app.use("/public", express.static(__dirname + '/public/'));
app.use("/sw.js", express.static(__dirname + '/public/sw.js'));

app.use(function (req, res, next) {
  if (req.headers["x-forwarded-proto"] === "https") {
    return next();
  }
  res.redirect("https://" + req.headers.host + req.url);
});

app.get('/', function (request, response) {
  response.sendFile('index.html', { root: `${__dirname}/public/` });
});

app.get('/favicon.ico', async function (request, response) {
  response.redirect(301, '/public/favicon.ico');
});

app.listen(process.env.PORT || 3000, '0.0.0.0', function () {
  console.log('Running')
});
