import React, {useCallback} from 'react';
import {VStack} from 'native-base';
import AuthFormContainer from '../components/AuthFormContainer/AuthFormsContainer';
import {signInFields, signInInitialValues} from '../helpers/constants';
import {TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {signUpThunk} from '../thunks';
import {FormikValues} from 'formik';

const SignInScreen: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(({email, password}: FormikValues) => {
    dispatch(signUpThunk({email, password}));
  }, []);

  return (
    <VStack space={'sm'} p={2}>
      <AuthFormContainer
        fields={signInFields}
        submitButtonText={'Sign In'}
        initialValues={signInInitialValues}
        onSubmit={handleSubmit}
      />
      <TextInput />
    </VStack>
  );
};

export default SignInScreen;
