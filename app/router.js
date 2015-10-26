import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.resource('users', function() {
    this.route('new');
    this.route('edit', { path: ':user_id/edit' });
    this.route('show', { path: ':user_id' }, function() {
      this.resource('vutes', function() {
        this.route('new');
      });
    });
  });
});

export default Router;
