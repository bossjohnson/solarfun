var express = require('express');
var router = express.Router();
var request = require('request');
var http = require('http');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/yomamajoke', function(req, res, next) {

var urlApi = 'http://api.yomomma.info/';

var httpRequest = http.request(urlApi, (httpResponse) => {
httpResponse.setEncoding('utf8');
var text = '';
httpResponse.on('data', (chunk) => {
  text += chunk
  console.log(`BODY: ${chunk}`);
});
httpResponse.on('end', () => {
  var obj = {
    joke: JSON.parse(text)
  }
  console.log(obj)
  res.render('joke', obj)
  console.log('No more data in response.')
})
});
// write data to request body
httpRequest.end();


});



router.post('/', function(req, res, next) {
    console.log(req.body);
    var route = '/' + req.body.state;
    res.redirect(route);
});
module.exports = router;
