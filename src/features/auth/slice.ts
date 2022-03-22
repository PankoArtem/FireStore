import {createSlice} from '@reduxjs/toolkit';
import {getUserThunk, signInThunk, signOutThunk, signUpThunk} from './thunks';
import {User} from './entities';

export interface AuthState {
  isLoading: boolean;
  uid?: string;
  user?: User;
  errorMessage?: string;
}

const initialState: AuthState = {
  isLoading: false,
  uid: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signUpThunk.pending, state => ({
      ...state,
      uid: undefined,
      isLoading: true,
      errorMessage: undefined,
    }));
    builder.addCase(signUpThunk.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      errorMessage: undefined,
      uid: action.payload,
    }));
    builder.addCase(signUpThunk.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      uid: undefined,
      errorMessage: action.payload?.nativeErrorMessage,
    }));
    builder.addCase(signInThunk.pending, state => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(signInThunk.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      uid: action.payload,
    }));
    builder.addCase(signInThunk.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      errorMessage: action.payload?.nativeErrorMessage,
    }));
    builder.addCase(signOutThunk.pending, state => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(signOutThunk.fulfilled, state => ({
      ...state,
      isLoading: false,
      uid: undefined,
      user: undefined,
    }));
    builder.addCase(signOutThunk.rejected, state => ({...state}));
    builder.addCase(getUserThunk.pending, state => ({...state}));
    builder.addCase(getUserThunk.fulfilled, (state, action) => ({
      ...state,
      user: action.payload,
    }));
    builder.addCase(getUserThunk.rejected, state => ({
      ...state,
    }));
  },
});

export default authSlice.reducer;
