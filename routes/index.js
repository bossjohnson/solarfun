var express = require('express');
var router = express.Router();
var request = require('request');
var ajaxPromise = require('ajax-promise');
var http = require('http');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/:state', function(req, res, next) {
  console.log(ajaxPromise);
    var data;
    console.log(req.params.state);
    var urlString = 'http://developer.nrel.gov/api/solar/open_pv/installs/index?api_key=DEMO_KEY&state=' + req.params.state;

    request(urlString, function(err, res, body) {
      console.log(body);
      data = body;
    });
    res.render('state', data);


    // http.get(urlString, function(res) {
    //   console.log(res.body);
    // });
    // var options = {
    //   host: urlString,
    //   method: 'GET'
    // };
    // http.request(options, function(res) {
    //   console.log(res);
    // });
    // request({
    //     url: urlString,
    //     method: 'GET'
    // }, function(err, res, body) {
    //     console.log(body);
    // });
    // ajaxPromise.get(urlString).then(function(res) {
    //   console.log(res);
    // });
    res.render('state', data);
    // console.log(data);
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    var route = '/' + req.body.state;
    res.redirect(route);
});
module.exports = router;
