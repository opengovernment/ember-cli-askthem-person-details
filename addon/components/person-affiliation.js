import Ember from 'ember';
import layout from '../templates/components/person-affiliation';

export default Ember.Component.extend({
  layout: layout,
  person: null,
  affiliation: Ember.computed('person', function() {
    var affiliation = [],
        person = this.get('person');

    if (!Ember.isEmpty(person.political_position_title)) {
      affiliation.push(person.political_position_title);
    }

    if (!Ember.isEmpty(person.most_recent_district)) {
      affiliation.push(person.most_recent_district);
    } else if (!Ember.isEmpty(person.state) && person.state !== 'unaffiliated') {
      var stateParts = person.state.split('-'),
          stateCode = stateParts.shift();

      if (stateParts.length > 1) {
        affiliation.push(Ember.String.capitalize(stateParts.join(' ')));
      }

      affiliation.push(Ember.String.capitalize(stateCode));
    }

    if (!Ember.isEmpty(person.party)) {
      affiliation.push(person.party);
    }

    return affiliation.join(', ');
  })
});
