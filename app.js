'use strict';

var a127 = require('a127-magic');
var express = require('express');
var app = express();

// uncomment the following if you need to parse incoming form data
//app.use(express.bodyParser());

app.use(a127.middleware());

app.get('/getToken', createToken);

app.listen(process.env.PORT || 10010);

console.log('Express started on port 10010');

function createToken(req, res, next) {
  var oauth = a127.resource('oauth2');
  var tokenRequest = {
    clientId: 'JZvXX7w8ND2XkSAmnwFD3M2qR17sMWqF',
    clientSecret: 'HcE4M4Se4OjXDT65'
  };
  
  oauth.spi.createTokenClientCredentials(tokenRequest, function(err, result) {
    if (err) { res.send(err); }
     console.log(result)
    var accessToken = result.access_token;
   
    res.send("Set access token to: " + result.access_token);
  });
}
