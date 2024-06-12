const initialState = {
  list: {
    loading: false,
    error: "",
    data: "",
  },
  journey: {
    loading: false,
    error: "",
    data: "",
  },
};

export const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LIST_LOADING":
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
        },
      };
    case "USER_LIST_SUCCESS":
      return {
        ...state,
        list: {
          ...state.journey,
          loading: false,
          data: action.payload,
        },
      };
    case "USER_LIST_ERROR":
      return {
        ...state,
        list: {
          ...state.journey,
          error: action.payload,
          loading: false,
        },
      };

    case "USER_JOURNEY_LOADING":
      return {
        ...state,
        journey: {
          ...state.journey,
          loading: true,
        },
      };
    case "USER_JOURNEY_SUCCESS":
      return {
        ...state,
        journey: {
          ...state.journey,
          loading: false,
          data: action.payload,
        },
      };
    case "USER_JOURNEY_ERROR":
      return {
        ...state,
        journey: {
          ...state.journey,
          error: action.payload,
          loading: false,
        },
      };

    default:
      return state;
  }
};
