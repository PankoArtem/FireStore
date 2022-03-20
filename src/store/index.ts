import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/auth/slice';

const rootReducer = combineReducers({authReducer});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
