import UsersBaseController from './base';

export default UsersBaseController.extend({
  actions: {
    cancel: function() {
      this.transitionToRoute('users.show', this.get('model'));
      return false;
    }
  }
});
