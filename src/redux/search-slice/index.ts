import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Define the initial state interface

// We don't need flexible type so we don't use <T>

export interface SearchState {
  recipesTags: [string?];
  mealsTags: [string?];
}

// Define the initial state
const initialState: SearchState = {
  recipesTags: [],
  mealsTags: [],
};

// Creating Redux slice
const configSlice = createSlice({
  name: 'search',
  initialState, // Use the defined initialState
  reducers: {
    setRecipesTags: (state, action: PayloadAction<any>) => {
      state.recipesTags = action.payload;
    },
    setMealsTags: (state, action: PayloadAction<any>) => {
      state.mealsTags = action.payload;
    },
  },
});

// Export action creators and reducer
export const {setRecipesTags, setMealsTags} = configSlice.actions;

export default configSlice.reducer;
