import Ember from 'ember';

const { inject: { service }, RSVP } = Ember;

export default Ember.Service.extend({
  session: service('session'),
  store: service(),

  loadCurrentUser() {
    console.log("load user");
    return new RSVP.Promise((resolve, reject) => {
      const userId = this.get('session.data.authenticated.user_id');
      console.log(userId);
      if (!Ember.isEmpty(userId)) {
        return this.get('store').find('user', userId).then((user) => {
          this.set('user', user);
          resolve();
        }, reject);
      } else {
        resolve();
      }
    });
  }
});
