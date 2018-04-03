var assert = require('assert');
var Athlete = require('../athlete.js');

describe('Athlete', function(){
  it('should have a hydration attribute that starts at 100', function(){
    var athlete = new Athlete();
    assert.strictEqual(athlete.hydration, 100);

  });

});
