import Ember from 'ember';

import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('cdn-avatar-from', {
});

test('it takes imageUrl and returns an embed.ly image tag', function(assert) {
  var component = this.subject(),
      imageUrl = 'http://2.bp.blogspot.com/-dgjzXSHV4mY/T9-ClQKDU6I/AAAAAAAAE0U/OxlHW_T9Ins/s1600/marty_feldman_512.jpg',
      escaped = encodeURIComponent(imageUrl),
      proxiedUrlBase = 'http://i.embed.ly/1/display/crop?key=099581ac0bab44b6bfc0e3d19e0012d7&url=';


  var expectedSrc = proxiedUrlBase + escaped + '&width=60&height=60&errorurl=http%3A%2F%2Fwww.askthem.io%2Fassets%2Fplaceholder.png';

  Ember.run(function() {
    component.set('imageUrl', imageUrl);
  });

  assert.equal(this.$().attr('src'), expectedSrc);
});
