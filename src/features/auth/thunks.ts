import {createAsyncThunk} from '@reduxjs/toolkit';
import {firebaseSignIn, firebaseSignUp} from '../../services/firebase/auth';

export const signUpThunk = createAsyncThunk(
  'auth/signUp',
  async ({email, password}: {email: string; password: string}) => {
    try {
      return await firebaseSignUp({email, password});
    } catch (e) {
      return e;
    }
  },
);

export const signInThunk = createAsyncThunk(
  'auth/signIn',
  async ({email, password}: {email: string; password: string}) => {
    try {
      return await firebaseSignIn({email, password});
    } catch (e) {
      return e;
    }
  },
);
