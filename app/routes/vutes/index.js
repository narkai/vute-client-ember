import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // return this.modelFor('users/show').get('vutes');
    return this.modelFor('users/show').store.findAll('vute');
  }
});
