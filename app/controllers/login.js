// import Ember from 'ember';
// import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
//
// export default Ember.Controller.extend(LoginControllerMixin, {
//   authenticator: 'simple-auth-authenticator:oauth2-password-grant'
// });

import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate() {
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:oauth2', identification, password).catch((reason) => {
        this.set('errorMessage', reason.error);
      });
    }
  }
});
