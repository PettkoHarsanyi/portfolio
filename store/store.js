import { combineReducers, configureStore } from "@reduxjs/toolkit";

const initialState = {
    isDark: true,
}

const rootReducer = (state = initialState,action) => {
    const {type,payload} = action

    if(type === "CHANGE_DARKNESS"){
        return {isDark: !state.isDark}
    }

    return state;
}

export const store = configureStore({reducer: rootReducer});