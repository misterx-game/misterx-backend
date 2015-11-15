var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'misterx-express'
    },
    port: 3001,
    db: 'mongodb://localhost/misterx-express-development',
    jwt: {
      secretOrKey: 'secret',
      authScheme: 'Bearer'
    },
    github: {
      // clientId: '',
      // clientSecret: ''
    }
  },

  test: {
    root: rootPath,
    app: {
      name: 'misterx-express'
    },
    port: 3000,
    db: 'mongodb://localhost/misterx-express-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'misterx-express'
    },
    port: 3000,
    db: 'mongodb://localhost/misterx-express-production'
  }
};

module.exports = config[env];
