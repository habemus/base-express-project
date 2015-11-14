// native dependencies
var http    = require('http');

// external dependencies
var express = require('express');
var morgan  = require('morgan');

/**
 * Function that starts the host server
 */
function create_SERVER_PROJECT_NAME_(options) {

  // create express app instance
  var app = express();

  // logging
  app.use(morgan('dev'));

  // define description route
  app.get('/who', function (req, res) {
    res.json({
      name: '_SERVER_PROJECT_NAME_'
    });
  });

  return app;
}

module.exports = create_SERVER_PROJECT_NAME_;