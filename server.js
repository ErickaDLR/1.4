
var firebase = require('firebase');
var config = {
  apiKey: "AIzaSyBd7o-b9J3F5IYED9TmXz3tE_ebD4-MO1U",
  authDomain: "ericka1-4.firebaseapp.com",
  databaseURL: "https://ericka1-4-default-rtdb.firebaseio.com",
  projectId: "ericka1-4",
  storageBucket: "ericka1-4.firebasestorage.app",
  messagingSenderId: "675372594972",
  appId: "1:675372594972:web:154ee9d4754d63de2dacd9",
  measurementId: "G-JQXPZ5WWRR"
};
firebase.initializeApp(config);



var express = require('express');
var app = express();

app.get('/', function (req, res) {
  
  console.log("HTTP Get Request");
  res.send("HTTP GET Request");
  //Insert key,value pair to database
  firebase.database().ref('/TestMessages').set({TestMessage: 'aaaaaaaaaaaa'});
  
});

app.put('/', function (req, res) {
  console.log("HTTP Put Request");
  res.send("HTTP PUT Request");
});

app.post('/', function (req, res) {
  console.log("HTTP POST Request");
  res.send("HTTP POST Request");  
});

app.delete('/', function (req, res) {
  console.log("HTTP DELETE Request");
  res.send("HTTP DELETE Request");
});

var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});