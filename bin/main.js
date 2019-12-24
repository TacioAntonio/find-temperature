#!/usr/bin/env node
'use strict';

var program = require('commander');
var packageJSON = require('../package.json');
var findTemperature = require('./findTemperature');

program.version(packageJSON.version).description('Find temperature of a city.').option('-C, --city <city>', 'City to be found at temperature. (Default: Sao Paulo)').option('-S, --state <state>', 'City state. (Default: SP)').parse(process.argv);

findTemperature(program.city, program.state);