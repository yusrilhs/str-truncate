'use strict'
var should = require('chai').should();

describe('Test str-truncate', function() {

  before(function() {
    // Register polyfill
    require('./index');
  });

  describe('Test polyfill registered', function() {
    it('Should truncate is a function', function() {
      'test'.truncate.should.be.a('function');
    });
  });

  describe('Test String.prototype.truncate', function() {
    it('Should to not truncate anything', function() {
      var str = 'Lorem ipsum dolor.'.truncate(50);

      str.should.to.equal('Lorem ipsum dolor.');
    });

    it('Should truncate string', function() {
      var str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \
Aliquid corrupti vitae, doloribus iusto praesentium dolorem.'.truncate(50);

      str.should.to.equal('Lorem ipsum dolor sit amet, consectetur...');
    });

    it('Should truncate string with custom clamp', function() {
      var str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \
Eaque doloremque asperiores ut ipsum totam quos.'.truncate(50, ' ..read more');

      str.should.to.equal('Lorem ipsum dolor sit amet, ..read more');
    });
  });
});
