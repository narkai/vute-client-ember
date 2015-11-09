import Ember from 'ember';
import DS from 'ember-data';

const { service } = Ember.inject;

export default Ember.Service.extend({
  session: service('session'),
  store: service(),

  account: Ember.computed('session.data.authenticated.user_id', function() {
    const userId = this.get('session.data.authenticated.user_id');
    // const token = this.get('session.data.authenticated.access_token');
    // console.log(this.get('session.data.authenticated'));
    // console.log(userId);
    // console.log(token);
    if (!Ember.isEmpty(userId)) {
      return DS.PromiseObject.create({
        promise: this.get('store').find('user', userId)
      });
    }
  })
});
