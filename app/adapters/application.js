import DS from 'ember-data';

import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

import ENV from "../config/environment";

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:application',
  namespace: ENV.API_VERSION,
  host: ENV.API_URL,
  shouldReloadAll() { return true; }
});
