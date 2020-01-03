import * as a from '../actions/profileActions'

const initialState = {
    profileList: [],
    profile: {},
    isFetching: false,
    isPosting: false,
    isSuccessful: false,
    isError: false,
    error: ''
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case a.GET_PROFILE_START:
            return {
                ...state,
                isFetching: true,
                isSuccessful: false,
                isError: false,
                error: ''
            }
        case a.GET_PROFILE_SUCCESS:
            return {
                ...state,
                profileList: action.payload,
                isFetching: false,
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
                isPosting: false,
                isSuccessful: false,
                isError: true,
                error: JSON.stringify(action.payload)
            }
        default:
            return state;
    }
}