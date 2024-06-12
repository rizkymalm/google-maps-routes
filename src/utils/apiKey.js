const ENV = {
  prod: {
    API_KEY_USER: process.env.REACT_APP_API_KEY_USER,
    API_KEY_AUTH: process.env.REACT_APP_API_KEY_USER,
    API_KEY_KOIN: process.env.REACT_APP_API_KEY_KOIN,
    API_KEY_SURVEY: process.env.REACT_APP_API_KEY_SURVEY,
    API_KEY_CONTACT: process.env.REACT_APP_API_KEY_CONTACT,
    API_KEY_PROJECT: process.env.REACT_APP_API_KEY_PROJECT,
    env: 'development',
  },
  dev: {
    API_KEY_USER: process.env.REACT_APP_API_KEY_USER_DEV,
    API_KEY_AUTH: process.env.REACT_APP_API_KEY_USER_DEV,
    API_KEY_KOIN: process.env.REACT_APP_API_KEY_KOIN_DEV,
    API_KEY_SURVEY: process.env.REACT_APP_API_KEY_SURVEY_DEV,
    API_KEY_CONTACT: process.env.REACT_APP_API_KEY_CONTACT_DEV,
    API_KEY_PROJECT: process.env.REACT_APP_API_KEY_PROJECT_DEV,
    env: 'development',
  },
};

function getEnvVars(env = '') {
  if (env === 'production') {
    return ENV.prod;
  } else {
    return ENV.dev;
  }
}

export default getEnvVars(process.env.REACT_APP_NODE_ENV);
