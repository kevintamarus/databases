var models = require('../models');
var mysql = require('mysql');
var request = require('request');

module.exports = {
  messages: {
    get: function (req, res) {
      //console.log('messages get res is ', res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
     
      var queryString = 'INSERT INTO messages VALUES(2, HI KEVIN)';
      var queryArgs = [];
      dbConnection = mysql.createConnection({
        user: 'student',
        password: 'student',
        database: 'chat'
      });
      dbConnection.connect();

      dbConnection.query(queryString, queryArgs, function(err) {
        if (err) { throw err; }

        // Now query the Node chat server and see if it returns
        // the message we just inserted:
        request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
          
          done();
        });
      });
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      
      

    },
    post: function (req, res) {
      console.log('USER post req is ', req.body.username);
      //req.res.body.username;
      res.end();
    }
  }
};

