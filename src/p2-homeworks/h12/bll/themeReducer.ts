import {dark} from "@material-ui/core/styles/createPalette";



export type ThemesInitType = {
    currentThemes: string
}

const initState: ThemesInitType = {
    currentThemes: 'dark'
};

export const themeReducer = (state = initState, action: ChangeThemeACType): ThemesInitType => { // fix any
    switch (action.type) {
        case "CHANGE_THEMES": {
            return {...state, currentThemes: action.payload};
        }

        default: return state;
    }
};

export type ChangeThemeACType = {
    type: "CHANGE_THEMES"
    payload: string
}

export const changeThemeC = (theme: string): ChangeThemeACType => {
    return {type: "CHANGE_THEMES", payload:theme}
}; // fix any