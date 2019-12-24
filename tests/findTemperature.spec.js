/* eslint-disable no-unused-expressions */
const { expect } = require('chai');

const findTemperature = require('../src/findTemperature');

describe('findTemperature', () => {
  it.only('should be exist method', async () => {
    expect(findTemperature).to.be.exist;
  });
});
