import Ember from 'ember';
import layout from '../templates/components/cdn-avatar-from';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'img',
  attributeBindings: ['src', 'width', 'height', 'alt'],
  imageUrl: null,
  height: 60,
  width: 60,
  alt: null,
  src: Ember.computed('imageUrl', 'height', 'width', function() {
    var proxiedUrlBase = 'http://i.embed.ly/1/display/crop?key=',
        apiKey = '099581ac0bab44b6bfc0e3d19e0012d7',
        baseUrl = proxiedUrlBase + apiKey + '&url=',
        errorUrlEscaped = 'http%3A%2F%2Fwww.askthem.io%2Fassets%2Fplaceholder.png';

    var queryStringEnd = '&width=' + this.get('width');
    queryStringEnd += '&height=' + this.get('height');
    queryStringEnd += '&errorurl=' + errorUrlEscaped;

    return baseUrl + encodeURIComponent(this.get('imageUrl')) + queryStringEnd;
  })
});
