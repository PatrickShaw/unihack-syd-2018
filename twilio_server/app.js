const express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , cors = require('cors')
  , port = process.env.PORT || 1337
  , twilioClient = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/', function(req, res){
  console.log('sending');
  twilioClient.messages.create({from: process.env.TWILIO_NUMBER, body: req.body.message, to: process.env.RECIPIENT_NUMBER})
    .then(message => {
      console.log('sent successfully');
      res.send(message).end();
    })
    .catch(error => {
      console.error(error);
      res.send(error).end();
    })
    .done();
});

app.listen(port, function () {
  console.log('Listening on port ' + port)
});
