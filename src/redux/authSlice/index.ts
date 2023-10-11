import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {authState} from '../../Interface';

const initialState: authState = {
  token: '', // Initialize the token state
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    clearToken: state => {
      state.token = ''; // Clear the token
    },
  },
});

export const {setToken, clearToken} = authSlice.actions;
export default authSlice.reducer;
