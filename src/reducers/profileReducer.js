import * as a from '../actions/profileActions'

/*
profileReducer holds the most recent profileList, profile, and error message in state

isFetching, isPosting, isSuccessful, and isError booleans are used to render loading spinners,
disable forms during submission, and display error message modals as required.
*/

const initialState = {
    profileList: [],
    profile: {},
    isFetchingList: false,
    isFetchingProfile: false,
    isPosting: false,
    isSuccessful: false,
    isError: false,
    error: ''
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case a.GET_PROFILE_LIST_START:
            return {
                ...state,
                isFetchingList: true,
                isSuccessful: false,
                isError: false,
                error: ''
            }
        case a.GET_PROFILE_LIST_SUCCESS:
            return {
                ...state,
                profileList: action.payload,
                isFetchingList: false,
                isError: false,
                error: ''
            }
        case a.GET_PROFILE_START:
            return {
                ...state,
                isFetchingProfile: true,
                isSuccessful: false,
                isError: false,
                error: ''
            }
        case a.GET_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.payload,
                isFetchingProfile: false,
                isError: false,
                error: ''
            }
        case a.POST_PROFILE_START:
            return {
                ...state,
                profile: action.payload,
                isPosting: true,
                isSuccessful: false,
                isError: false,
                error: ''
            }
        case a.UPDATE_PROFILE_START:
            return {
                ...state,
                profile: action.payload,
                isPosting: true,
                isSuccessful: false,
                isError: false,
                error: ''
            }
        case a.PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.payload,
                isPosting: false,
                isSuccessful: true,
                isError: false,
                error: ''
            }
        case a.PROFILE_FAIL:
            return {
                ...state,
                isFetchingList: false,
                isFetchingProfile: false,
                isPosting: false,
                isSuccessful: false,
                isError: true,
                error: action.payload.message
            }
        default:
            return state;
    }
}