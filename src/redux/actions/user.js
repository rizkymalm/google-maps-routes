import {
  userList,
  userJourneyList,
  journeyDetail,
} from "../../services/dashboardService";

export const getUserList =
  ({ params }) =>
  async (dispatch) => {
    dispatch({
      type: "USER_LIST_LOADING",
    });
    try {
      const response = await userList(params);
      dispatch({
        type: "USER_LIST_SUCCESS",
        payload: response,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: "USER_LIST_ERROR",
          payload: error,
        });
      }
    }
  };

export const getUserJourneyList =
  ({ user, params }) =>
  async (dispatch) => {
    dispatch({
      type: "USER_JOURNEY_LOADING",
    });
    try {
      const response = await userJourneyList(user, params);
      dispatch({
        type: "USER_JOURNEY_SUCCESS",
        payload: response,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: "USER_JOURNEY_ERROR",
          payload: error,
        });
      }
    }
  };

export const getJourneyDetail =
  ({ journey, callback }) =>
  async (dispatch) => {
    dispatch({
      type: "JOURNEY_LOADING",
    });
    try {
      const response = await journeyDetail(journey);
      dispatch({
        type: "JOURNEY_SUCCESS",
        payload: response,
      });
      callback(response.data);
    } catch (error) {
    }
  };
