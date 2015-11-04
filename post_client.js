var request = require('request');

request({
  method: 'POST',
  url: 'http://private-5e159b-apprennetv20.apiary-mock.com/questions',
  headers: {
    'Content-Type': 'application/json'
  },
  body: "{  \"question\": \"Favourite programming language?\",  \"choices\": [    \"Swift\",    \"Python\",    \"Objective-C\",    \"Ruby\",    \"Javacript\"  ]}"
}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});
