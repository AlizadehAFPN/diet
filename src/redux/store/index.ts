import {combineReducers, configureStore} from '@reduxjs/toolkit';
import searchSlice from '../search-slice';
const rootReducer = combineReducers({
  search: searchSlice,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
