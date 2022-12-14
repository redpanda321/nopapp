import React from 'react';

export const initialState = { themeMode: 'light' };
export function ThemeReducer(
    state: { themeMode: string },
    action: { type: string; payload: string }
) {
    const { payload } = action;
    switch (action.type) {
        case 'set-theme':
            return { ...state, themeMode: payload === 'light' ? 'light' : 'dark' };
        default:
            return state;
       
    }
}

export const ThemeReducerContext = React.createContext({
    ThemeState: { themeMode: 'light' },
    dispatch: ({ type, payload }) => { },
});
