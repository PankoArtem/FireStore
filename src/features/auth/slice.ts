import {createSlice} from '@reduxjs/toolkit';
import {signInThunk, signUpThunk} from './thunks';

const initialState = {
  isLoading: false,
  user: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signUpThunk.pending, state => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(signUpThunk.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(signUpThunk.rejected, (state, action) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(signInThunk.pending, state => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(signInThunk.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(signInThunk.rejected, (state, action) => ({
      ...state,
      isLoading: false,
    }));
  },
});

export default authSlice.reducer;
