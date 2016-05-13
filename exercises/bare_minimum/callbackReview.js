/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');
var https = require('https');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, function(err, data) {
    if (err) {
      callback(err);
    } else {
      var firstLine = data.toString().split('\n');
      callback(err, firstLine[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // http.get(url, function(res){
  //   res.setEncoding('utf8');
  //   res.on('data', callback(chunk));
  //   });

  // });
};







  // var req = https.get(url, function(options, statusCode) {
  //   // console.log('options: ', options);
  // });

  // req.on('error', function(e) {
  //   console.log('E:', e);
  // });


// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
