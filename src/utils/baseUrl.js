const ENV = {
  dev: {
    API_DASHBOARD: process.env.REACT_APP_API_DASHBOARD_DEV,
    env: 'development',
  },
  prod: {
    API_DASHBOARD: process.env.REACT_APP_API_DASHBOARD_PROD,
    env: 'production',
  },
};

function getEnvVars(env = '') {
  if (env === 'development') {
    return ENV.dev;
  }else{
    return ENV.prod;
  }
}

export default getEnvVars(process.env.REACT_APP_NODE_ENV);
