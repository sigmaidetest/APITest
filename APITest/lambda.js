let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {

	// let response = {
	// 	"isBase64Encoded": 1,
	// 	"statusCode": 200,
	// 	"headers": {
	// 		"h1": "h1v"
	// 	},
	// 	"body": {msg: 'Hello there!'}
	// };

	callback(null, 'Hello there!');
}






