import { combineReducers, configureStore } from "@reduxjs/toolkit";

const initialState = {
    isDark: true,
    lang: "ENG",
}

const rootReducer = (state = initialState,action) => {
    const {type,payload} = action

    if(type === "CHANGE_DARKNESS"){
        return {...state, isDark: !state.isDark}
    }

    if(type === "CHANGE_LANGUAGE"){
        if(state.lang==="ENG"){
            return {...state, lang: "HUN"}
        }
        return {...state, lang:"ENG"}
    }

    return state;
}

export const store = configureStore({reducer: rootReducer});