var models = require('../models');
var mysql = require('mysql');
var request = require('request');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(data) {
        var obj = {};
        obj.results = data;
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.status(200);
        res.send(obj);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      req.setEncoding('utf8');
      models.messages.post(req.body, res);

      
     
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      
      res.writeHead(201);
      res.end();
      

    },
    post: function (req, res) {
      req.setEncoding('utf8');
      models.users.post(req.body, res);
    }
  }
};

