/* eslint-disable no-unused-expressions */
const expect = require('chai').expect;

const exec = require('child_process').exec;
const findTemperature = './src/main.js';
const packageJSON = require('../package.json');

describe('Main CLI', () => {
  it('should return version of findTemperature', (done) => {
    exec(`${findTemperature} --version`, (err, stdout, stderr) => {
      if(err) throw err;
      expect(stdout.replace('\n', '')).to.be.equal(packageJSON.version);
      done();
    });
  });

  it('should return the description when findTemperature --help', (done) => {
    exec(`${findTemperature} --help`, (err, stdout, stderr) => {
      if(err) throw err;
      expect(stdout.includes('Find temperature of a city.')).to.be.true;
      done();
    });
  });

  it('should return the description when findTemperature --help', (done) => {
    exec(`${findTemperature} --help`, (err, stdout, stderr) => {
      if(err) throw err;
      expect(stdout.includes('Find temperature of a city')).to.be.true;
      done();
    });
  });

  it('should return the city option when findTemperature --help', (done) => {
    exec(`${findTemperature} --help`, (err, stdout, stderr) => {
      if(err) throw err;
      expect(stdout.includes('--city')).to.be.true;
      done();
    });
  });

  it('should return the state option when findTemperature --help', (done) => {
    exec(`${findTemperature} --help`, (err, stdout, stderr) => {
      if(err) throw err;
      expect(stdout.includes('--state')).to.be.true;
      done();
    });
  });
});
