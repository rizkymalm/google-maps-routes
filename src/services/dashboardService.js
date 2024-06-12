import { baseUrl, axios } from "../utils";

export const userList = async (params) => {
  const url = `${baseUrl.API_DASHBOARD}shoko/user/list`;
  const response = await axios.Get({
    url,
    params,
  });
  return response;
};

export const userJourneyList = async (user, params) => {
  const url = `${baseUrl.API_DASHBOARD}shoko/user/journey/${user}`;
  const response = await axios.Get({
    url,
    params,
  });
  return response;
};

export const journeyDetail = async (journey) => {
  const url = `${baseUrl.API_DASHBOARD}shoko/journey/${journey}`;
  const response = await axios.Get({
    url,
  });
  return response;
};
