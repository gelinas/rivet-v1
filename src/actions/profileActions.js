import { axiosWithAuth } from "../utils/axiosWithAuth";

// profile fetch action types
export const GET_PROFILE_START = "GET_PROFILE_START";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";

// profile mutation action types
export const POST_PROFILE_START = "POST_PROFILE_START";
export const UPDATE_PROFILE_START = "UPDATE_PROFILE_START";
export const PROFILE_SUCCESS = "PROFILE_SUCCESS";

// error generating action types
export const PROFILE_FAIL = "PROFILE_FAIL";

// action creators
export const getProfileList = () => dispatch => {
  dispatch({ type: GET_PROFILE_START });
  axiosWithAuth()
    .get(`/profiles`)
    .then(res => {
      dispatch({ type: GET_PROFILE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: PROFILE_FAIL, payload: err.data })
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
      // console.log("I'm an error for postProfile", err);
      dispatch({ type: PROFILE_FAIL, payload: err.data })
    });
};

export const updateProfile = (editedProfile) => dispatch => {
  dispatch({ type: UPDATE_PROFILE_START, payload: editedProfile });
  axiosWithAuth()
    .post(`/profile/${editedProfile.id}`, editedProfile)
    .then(res => {
      dispatch({ type: PROFILE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: PROFILE_FAIL, payload: err.data })
    });
};