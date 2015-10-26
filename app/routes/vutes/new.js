import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('vute', {
      user: this.modelFor('users/show')
    });
  },
  actions: {
    save: function() {
      var _this = this;
      var model = this.modelFor('vutes/new');
      model.save().then(function(){
        _this.transitionTo('vutes');
      });
    },
    cancel: function() {
      this.transitionTo('vutes');
    }
  }
});
