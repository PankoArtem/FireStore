import {createAsyncThunk} from '@reduxjs/toolkit';
import {firebaseSignIn, firebaseSignUp} from '../../services/firebase/auth';
import auth from '@react-native-firebase/auth';
import {addToDoc, getDoc} from '../../services/firebase/firestore';
import {User} from './entities';
import {KnownError} from '../../store/entities';

export const signUpThunk = createAsyncThunk<
  string | undefined,
  {email: string; password: string; age: string; name: string; surname: string},
  KnownError
>('auth/signUp', async ({email, password, age, surname, name}) => {
  try {
    const {
      user: {uid},
    } = await firebaseSignUp({email, password});
    await addToDoc('Users', uid, {email, age, surname, name});
    return uid;
  } catch (e) {
    throw e;
  }
});

export const signInThunk = createAsyncThunk<
  string | undefined,
  {email: string; password: string},
  KnownError
>('auth/signIn', async ({email, password}) => {
  try {
    const {
      user: {uid},
    } = await firebaseSignIn({email, password});
    return uid;
  } catch (e) {
    throw e;
  }
});

export const signOutThunk = createAsyncThunk<void, void, KnownError>(
  'auth/signOut',
  async () => {
    try {
      await auth().signOut();
    } catch (e) {
      throw e;
    }
  },
);

export const getUserThunk = createAsyncThunk<
  User | undefined,
  string,
  KnownError
>('auth/getUser', async uid => {
  try {
    const user: User | undefined = await getDoc('Users', uid);
    return user;
  } catch (e) {
    throw e;
  }
});
