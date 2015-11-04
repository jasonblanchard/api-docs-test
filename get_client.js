var request = require('request');

request('http://private-5e159b-apprennetv20.apiary-mock.com/questions', function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});
