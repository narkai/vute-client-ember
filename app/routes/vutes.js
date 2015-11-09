import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete: function(vute) {
      vute.destroyRecord();
    }
  }
});
