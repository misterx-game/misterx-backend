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
      client: {
        // clientId: '',
        clientId: 'f368e86456d2bf10b466',
        // clientSecret: ''
        clientSecret: '07a595f9b07268a8fd324c0cb63ae7ef3d39dda2'
      },
      admin: {
        // clientId: '',
        clientId: 'd03b234ae7ea7d56bc6e',
        // clientSecret: ''
        clientSecret: 'd2e5403fa7825b2bbc06d571873e84649048e934'
      }
    },
    cors: {
      origin: [
        'http://localhost:3000',
        'http://localhost:3003',
      ]
    }
  },

  wwwdevelop: {
    root: rootPath,
    app: {
      name: 'misterx-express'
    },
    port: 3000,
    db: 'mongodb://localhost/misterx-express-test',
    jwt: {
      secretOrKey: 'secret',
      authScheme: 'Bearer'
    },
    github: {
      client: {
        // clientId: '',
        // clientSecret: ''
      },
      admin: {
        // clientId: '',
        // clientSecret: ''
      }
    },
    cors: {
      origin: [
        'http://client.develop.misterx.ch',
        'http://admin.develop.misterx.ch',
      ]
    }
  },

  test: {
    root: rootPath,
    app: {
      name: 'misterx-express'
    },
    port: 3000,
    db: 'mongodb://localhost/misterx-express-test',
    jwt: {
      secretOrKey: 'secret',
      authScheme: 'Bearer'
    },
    github: {
      client: {
        // clientId: '',
        // clientSecret: ''
      },
      admin: {
        // clientId: '',
        // clientSecret: ''
      }
    },
    cors: {
      origin: [
      ]
    }
  },

  production: {
    root: rootPath,
    app: {
      name: 'misterx-express'
    },
    port: 3000,
    db: 'mongodb://localhost/misterx-express-production',
    jwt: {
      secretOrKey: 'secret',
      authScheme: 'Bearer'
    },
    github: {
      client: {
        // clientId: '',
        // clientSecret: ''
      },
      admin: {
        // clientId: '',
        // clientSecret: ''
      }
    },
    cors: {
      origin: [
      ]
    }
  }
};

module.exports = config[env];
