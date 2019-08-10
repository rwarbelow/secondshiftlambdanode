var AWS = require('aws-sdk');
var util = require('util')

exports.handler = function(event, context, callback) {
  util.inspect(event, {depth: null})
};