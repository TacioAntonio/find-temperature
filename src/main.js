#!/usr/bin/env node

const program = require('commander');
const packageJSON = require('../package.json');
const findTemperature = require('./findTemperature');

program
  .version(packageJSON.version)
  .description('Find temperature of a city.')
  .option('-C, --city <city>', 'City to be found at temperature. (Default: Sao Paulo)')
  .option('-S, --state <state>', 'City state. (Default: SP)')
  .parse(process.argv);

findTemperature(program.city, program.state);
