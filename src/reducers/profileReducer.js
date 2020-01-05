import * as a from '../actions/profileActions'

// profile reducer holds the latest profile list, profile data, and error message in state

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
                error: JSON.stringify(action.payload)
            }
        default:
            return state;
    }
}