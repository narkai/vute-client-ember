/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'vute-ember-client',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }

    // ,
    // contentSecurityPolicy: {
    //   'default-src': "'none'",
    //   'script-src': "'self' 'unsafe-inline' 'unsafe-eval' use.typekit.net connect.facebook.net maps.googleapis.com maps.gstatic.com",
    //   'font-src': "'self' data: use.typekit.net",
    //   'connect-src': "'self'",
    //   'img-src': "'self' www.facebook.com p.typekit.net",
    //   'style-src': "'self' 'unsafe-inline' use.typekit.net",
    //   'frame-src': "s-static.ak.facebook.com static.ak.facebook.com www.facebook.com"
    // }

    ,
    contentSecurityPolicy: {
      'connect-src': "'self' http://localhost:3000",
      'style-src': "'self' 'unsafe-inline'"
    }

    // ,
    // contentSecurityPolicy: {
    //   'connect-src': "'self' wss://*.localhost:3000",
    //   'frame-src': "'self' https://*.localhost:3000",
    //   'script-src': "'self' 'unsafe-eval' https://*.localhost:3000"
    // }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    //

    // simple auth

    // ENV['simple-auth'] = {
    //   crossOriginWhitelist: ['http://localhost:3000']
    // }

    // ENV['simple-auth'] = {
    //   // session: 'session:custom',
    //   authorizer: 'simple-auth-authorizer:oauth2-bearer'
    // }
    //
    // ENV['simple-auth-oauth2'] = {
    //   serverTokenEndpoint: 'http://localhost:3000/oauth/token'
    // }

    ENV['ember-simple-auth'] = {
      authenticationRoute: 'login'
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
