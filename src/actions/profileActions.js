import { axiosWithAuth } from "../utils/axiosWithAuth";

// profile fetch action types
export const GET_PROFILE_LIST_START = "GET_PROFILE_LIST_START";
export const GET_PROFILE_LIST_SUCCESS = "GET_PROFILE_LIST_SUCCESS";
export const GET_PROFILE_START = "GET_PROFILE_START";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";

// profile mutation action types
export const POST_PROFILE_START = "POST_PROFILE_START";
export const UPDATE_PROFILE_START = "UPDATE_PROFILE_START";
export const PROFILE_SUCCESS = "PROFILE_SUCCESS";

// error processing action types
export const PROFILE_FAIL = "PROFILE_FAIL";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

// action creators
export const getProfileList = () => dispatch => {
  dispatch({ type: GET_PROFILE_LIST_START });
  axiosWithAuth()
    .get(`/profiles`)
    .then(res => {
      dispatch({ type: GET_PROFILE_LIST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: PROFILE_FAIL, payload: err.response })
    });
};

export const getProfile = (id) => dispatch => {
  dispatch({ type: GET_PROFILE_START });
  axiosWithAuth()
    .get(`/profile/${id}`)
    .then(res => {
      dispatch({ type: GET_PROFILE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: PROFILE_FAIL, payload: err.response })
    });
};

export const postProfile = (newProfile) => dispatch => {
  dispatch({ type: POST_PROFILE_START, payload: newProfile });
  axiosWithAuth()
    .post(`/profile`, newProfile)
    .then(res => {
      dispatch({ type: PROFILE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: PROFILE_FAIL, payload: err.response })
    });
};

// The id attribute must be on the editedProfile object submitted
export const updateProfile = (editedProfile) => dispatch => {
  dispatch({ type: UPDATE_PROFILE_START, payload: editedProfile });
  axiosWithAuth()
    .post(`/profile/${editedProfile.id}`, editedProfile)
    .then(res => {
      dispatch({ type: PROFILE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: PROFILE_FAIL, payload: err.response })
    });
};

export const clearErrors = () => dispatch => {
  dispatch({ type: CLEAR_ERRORS });
};