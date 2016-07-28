//code copied, retyped, from lab 11 and lab 13
var express = require('express'),
  requestProxy = require('express-request-proxy'),
  port = process.env.PORT || 3000,
  app = express();

var proxyGitHub = function(request, response) {
  (
    requestProxy({
      url: 'https://api.github.com/*',
      headers: { Authorization: 'token ' + process.env.GITHUB_TOKEN }
    })
  )(request, response);
};

app.get('/github/*', proxyGitHub);

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request: ', request.url);
  response.sendFile('index.html', {root: '.'});
});

app.listen(port, function() {
  console.log('Server started on port ' + port);
});
