const fetchUrl = require('fetch').fetchUrl;
const chalk = require('chalk');
const ora = require('ora');
const token = require('./token');

const spinner = ora({
  text: 'Loading...',
  color: 'yellow',
});

function findTemperaturaOfCity(city = 'Campinas', state = 'SP') {
  spinner.start();
  fetchUrl(`https://api.hgbrasil.com/weather?key=${token}&city_name=${city},${state}`, (error, meta, body) => {


    try {
      const result = JSON.parse(body);

      spinner.stop();

      console.info(`
    ${chalk.blue('City:')} ${result.results.city.replace(',', '')}
    ${chalk.green('Temperature')}: ${result.results.temp}
    ${chalk.yellow('Condition')}: ${result.results.description}`);
    } catch (err) {
      console.info(`${chalk.red('Something went wrong in the API. Try in a few minutes.')}`);
      return err;
    }
  });
}

module.exports = findTemperaturaOfCity;
