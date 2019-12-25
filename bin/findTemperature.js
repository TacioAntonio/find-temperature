'use strict';

var fetchUrl = require('fetch').fetchUrl;
var chalk = require('chalk');
var ora = require('ora');
var token = require('./token');

var spinner = ora({
  text: 'Loading...',
  color: 'yellow'
});

function findTemperaturaOfCity() {
  var city = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Campinas';
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'SP';

  spinner.start();
  fetchUrl('https://api.hgbrasil.com/weather?key=' + token + '&city_name=' + city + ',' + state, function (error, meta, body) {

    try {
      var result = JSON.parse(body);

      spinner.stop();

      console.info('\n    ' + chalk.blue('City:') + ' ' + result.results.city.replace(',', '') + '\n    ' + chalk.green('Temperature') + ': ' + result.results.temp + '\n    ' + chalk.yellow('Condition') + ': ' + result.results.description);
    } catch (err) {
      console.info('' + chalk.red('Something went wrong in the API. Try in a few minutes.'));
      return err;
    }
  });
}

module.exports = findTemperaturaOfCity;