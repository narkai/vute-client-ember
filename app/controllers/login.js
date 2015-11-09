import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    login() {
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:oauth2', identification, password)
      .catch((reason) => {
        this.set('errorMessage', reason.error);
      });
      // .then(() => {
      //   alert('Success! Click the top link!');
      // }, (err) => {
      //   alert('Error obtaining token: ' + err.responseText);
      // });
    }
  }
});
