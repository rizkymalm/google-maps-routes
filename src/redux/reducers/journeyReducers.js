const initialState = {
  journey: {
    loading: false,
    error: "",
    data: "",
  },
};

export const journeyReducers = (state = initialState, action) => {
  switch (action.type) {
    case "JOURNEY_LOADING":
      return {
        ...state,
        journey: {
          ...state.journey,
          loading: true,
        },
      };
    case "JOURNEY_SUCCESS":
      return {
        ...state,
        journey: {
          ...state.journey,
          loading: false,
          data: action.payload,
        },
      };
    case "JOURNEY_ERROR":
      return {
        ...state,
        journey: {
          data: "",
          error: action.payload,
          loading: false,
        },
      };

    default:
      return state;
  }
};
