const express = require('express');
const bodyParser = require('body-parser'); 
//const firebase = require('firebase');
var admin = require('firebase-admin');
const { WebhookClient } = require('dialogflow-fulfillment');

const agent = new WebhookClient({request: request, response: response});



var app = express();

app.listen(3000, (req, res) => {
    console.log(`Server started on port ${3000}`);
});