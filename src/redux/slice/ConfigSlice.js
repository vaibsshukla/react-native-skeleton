import {createSlice} from '@reduxjs/toolkit';
import AppStrings from '../../res/AppStrings';

export const configSlice = createSlice({
  name: 'config',
  initialState: {lang: null, theme: null},
  reducers: {
    setLang: (state, action) => {
      const lang = action.payload;
      state.lang = lang;
      AppStrings.setLanguage(lang);
    },
    setTheme: (state, action) => {
      const theme = action.payload;
      state.theme = theme;
    },
  },
});

export const selectCurrentLang = state => state.config.lang;
export const selectCurrentTheme = state => state.config.theme;
export const selectConfig = state => state.config;

export const {setLang, setTheme} = configSlice.actions;

export default configSlice.reducer;
