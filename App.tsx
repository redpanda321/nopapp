import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@rneui/themed';
import RootNavigator from './src/navigation/RootNavigator';

import { cacheImages, cacheFonts } from './src/helpers/AssetsCaching';
import vectorFonts from './src/helpers/vector-fonts';

import {
    ThemeReducer,
    initialState,
    ThemeReducerContext,
} from './src/helpers/ThemeReducer';

export default () => {
    const [ThemeState, dispatch] = useReducer(ThemeReducer, initialState);
    const colorScheme = useColorScheme();

    useEffect(() => {
        if (colorScheme === 'dark') {
            dispatch({ type: 'set-theme', payload: 'dark' });
        }

    }, [colorScheme]);
}