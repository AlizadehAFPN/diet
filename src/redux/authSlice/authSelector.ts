// src/selectors/authSelectors.ts
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store'; // Adjust the path as per your project structure

export const selectToken = (state: RootState) => state.auth.token;

export const selectTokenExists = createSelector([selectToken], (token) => !!token);
