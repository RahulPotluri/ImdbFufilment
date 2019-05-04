const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json({type: 'application/json'}));

app.get('/', (req, res) => {
  res.status(200).end("app is running");
}); 

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.post('/webhook', require('./webhook'));

app.get('/webhook', (req,res) => {
  res.status(200).send("200 OK");
});

exports.webApi = functions.https.onRequest(app);
