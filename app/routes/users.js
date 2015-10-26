import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete: function(user) {
      var _this = this;
      user.destroyRecord().then(function() {
        //logout?
        _this.transitionTo('index');
      });
    }
  }
});
