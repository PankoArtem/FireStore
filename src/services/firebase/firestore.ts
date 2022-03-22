import firestore from '@react-native-firebase/firestore';

export const addToDoc = async (
  collection: string,
  docId: string,
  docContent: {[x: string]: unknown},
) => {
  try {
    await firestore().collection(collection).doc(docId).set(docContent);
  } catch (e) {
    throw e;
  }
};

export const getDoc = async (collection: string, uid: string) => {
  try {
    const user = await firestore().collection(collection).doc(uid).get();
    return user.data();
  } catch (e) {
    throw e;
  }
};
