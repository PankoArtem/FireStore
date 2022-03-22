import React from 'react';
import {Button, VStack} from 'native-base';
import AuthFormContainer from '../components/AuthFormContainer/AuthFormsContainer';
import {signInFields, signInInitialValues} from '../helpers/constants';
import {useDispatch} from 'react-redux';
import {signInThunk} from '../thunks';
import {FormikValues} from 'formik';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {signInSchema} from '../helpers/validationSchemas';

const SignInScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<{'Sign Up': undefined}>>();

  const dispatch = useDispatch();

  const handleSubmit = ({email, password}: FormikValues) => {
    dispatch(signInThunk({email, password}));
  };

  return (
    <VStack space={'sm'} p={2}>
      <AuthFormContainer
        fields={signInFields}
        submitButtonText={'Sign In'}
        initialValues={signInInitialValues}
        onSubmit={handleSubmit}
        validationSchema={signInSchema}
      />
      <Button onPress={() => navigation.navigate('Sign Up')}>Sign up</Button>
    </VStack>
  );
};

export default SignInScreen;
