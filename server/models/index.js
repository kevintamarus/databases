var db = require('../db');


module.exports = {
  messages: {
    get: function (cb) {
      let query = 'select * from messages';

      db.query(query, function(err, result) {
        if (err) { throw err; }
        
        cb(result);
      });
    }, // a function which produces all the messages
    post: function (req, res) {
    
      let parseMessage = JSON.stringify(req.message);
      
      let query = `INSERT INTO messages VALUES(1, ${parseMessage})`;
      
      db.query(query, function(err, result) {
        if (err) { 
          throw err; 
          res.end(); 
        } else {
          res.writeHead(201);
          res.end();
        }
        //cb(result);
      });
     
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (req, res) {
      let userName = JSON.stringify(req.user);
      
      let query = `INSERT INTO messages VALUES(1, ${userName})`;
      
      db.query(query, function(err, result) {
        if (err) {
          throw err;
          res.end();
        } else {
          res.writeHead(201);
          res.end();
        }
      });
    }
  }
};

