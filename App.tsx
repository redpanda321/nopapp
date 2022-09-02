import React, { useState, useReducer, useEffect } from 'react';
import { ThemeProvider } from 'react-native-elements';
import { useColorScheme } from 'react-native-appearance';
import RootNavigator from './src/components/AppLoading';
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