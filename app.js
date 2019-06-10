require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
var session = require('express-session');
const app = express();
const port = 3000;

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json({type: 'application/json'}));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  genid : function(req) {
    if(req.session) {
      var sessionIdString = req.session.split('/');
      if(sessionIdString.length > 4) {
        return sessionIdString[4];
      }
    }
  }
}));

app.get('/', (req, res) => {
  res.status(200).send("app is running");
}); 

app.listen(port, () => console.log(`Imdb app listening on port ${port}!`));

app.post('/webhook', require('./webhook'));

app.get('/webhook', (req,res) => {
  res.status(200).send("200 OK");
});

module.exports = app;
