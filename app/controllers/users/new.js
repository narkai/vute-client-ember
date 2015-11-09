import UsersBaseController from './base';

export default UsersBaseController.extend({
  actions: {
    cancel: function() {
      this.transitionToRoute('index');
      return false;
    }
  }
});
