import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SearchState, tag} from '../../Interface';

// Define the initial state
const initialState: SearchState = {
  recipesTags: [],
  mealsTags: [],
  recipesModal: false,
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
    setRecipesModal: (state, action: PayloadAction<boolean>) => {
      state.recipesModal = action.payload;
    },
  },
});

// Export action creators and reducer
export const {setRecipesTags, setMealsTags, setRecipesModal} =
  configSlice.actions;

export default configSlice.reducer;
