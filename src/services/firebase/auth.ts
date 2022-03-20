import auth from '@react-native-firebase/auth';

export const firebaseSignUp = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    return await auth().createUserWithEmailAndPassword(email, password);
  } catch (e) {
    throw e;
  }
};

export const firebaseSignIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    return await auth().signInWithEmailAndPassword(email, password);
  } catch (e) {
    throw e;
  }
};
