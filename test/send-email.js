var should = require('chai').should();

var email = require('../email.js');

describe('mailgun', function () {
  it('should send a domestic email', function (cb) {
    email.send('domestic', process.env.TEST_EMAIL, {},
        function (err, response, body) {
      should.not.exist(err);

      body.message.should.equal('Queued. Thank you.');

      should.exist(body.id);

      cb();
    });
  });

  it('should send an international email', function (cb) {
    email.send('international', process.env.TEST_EMAIL, {},
        function (err, response, body) {
      should.not.exist(err);

      body.message.should.equal('Queued. Thank you.');

      should.exist(body.id);

      cb();
    });
  });
});
