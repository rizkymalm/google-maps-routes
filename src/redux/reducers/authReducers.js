const initialState = {
    loading: false,
    isLogin: false,
    error: '',
    token: {
      accessToken: '',
      refreshToken: '',
    },
  };

  export const authReducers = (state = initialState, action) => {
    switch (action.type) {
      case 'AUTH_LOADING':
        return {
          ...state,
          loading: true,
        };

      case 'AUTH_SUCCESS':
        return {
          ...state,
          loading: false,
          token: action.payload,
          isLogin: true,
        };

      case 'LOGOUT':
        return {
          ...state,
          loading: false,
          token: {
            accessToken: '',
            refreshToken: '',
          },
          isLogin: false,
        };

      case 'AUTH_ERROR':
        return {
          ...state,
          error: action.payload,
          loading: false,
        };

      default:
        return state;
    }
  };
