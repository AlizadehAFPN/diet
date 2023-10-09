import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { tag } from '../../Interface';
// Define the initial state interface

// We don't need flexible type so we don't use <T>

export interface SearchState {
  recipesTags: tag[];
  mealsTags: tag[];
  recipesModal: boolean,

}

// Define the initial state
const initialState: SearchState = {
  recipesTags: [],
  mealsTags: [],
  recipesModal: false
};

// Creating Redux slice
const configSlice = createSlice({
  name: 'search',
  initialState, // Use the defined initialState
  reducers: {
    setRecipesTags: (state, action: PayloadAction<tag[]>) => {
      state.recipesTags = action.payload;
    },
    setMealsTags: (state, action: PayloadAction<tag[]>) => {
      state.mealsTags = action.payload;
    },
    setRecipesModal:(state, action: PayloadAction<boolean>)=>{
      state.recipesModal= action.payload
    }
  },
});

// Export action creators and reducer
export const {setRecipesTags, setMealsTags, setRecipesModal} = configSlice.actions;

export default configSlice.reducer;
