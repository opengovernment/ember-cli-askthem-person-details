import Ember from 'ember';
import layout from '../templates/components/person-details';

export default Ember.Component.extend({
  layout: layout,
  person: null,
  isUnaffiliated: Ember.computed('person', function() {
    var person = this.get('person'),
        unaffiliated = false;

    if (!Ember.isEmpty(person.state) && person.state === 'unaffiliated') {
        unaffiliated = true;
    }

    return unaffiliated;
  })
});
