import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Define the initial state interface

export interface authState {
  token: string;
}

// Define the initial state
const initialState: authState = {
  token: '',
};

// Creating Redux slice
const configSlice = createSlice({
  name: 'auth',
  initialState, // Use the defined initialState
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

// Export action creators and reducer
export const {setToken} = configSlice.actions;

export default configSlice.reducer;
