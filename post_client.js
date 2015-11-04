var request = require('request');

request({
  method: 'POST',
  url: 'http://localhost:3000/questions',
  headers: {
    'Content-Type': 'application/json'
  },
  body: "{  \"question\": \"Favourite programming language?\",  \"choices\": [    \"Swift\",    \"Python\",    \"Objective-C\",    \"Ruby\",    \"Javacript\"  ]}"
}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});
