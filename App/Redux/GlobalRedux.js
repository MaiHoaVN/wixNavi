import _ from 'lodash'

// action types
export const ActionTypesGlobal = {
    FORCE_LOGIN: 'FORCE_LOGIN',
}

// default state
export const defaultState = {
    forceLogin: false
}

// action creator
export const saveDataReduxGlobal = (type, data) => {
    return {
        type: type,
        payload: data
    }
}

// reducer
export const reducer = (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ActionTypesGlobal.FORCE_LOGIN:
            return { ...state, forceLogin: payload };
        default:
            return state
    }
};