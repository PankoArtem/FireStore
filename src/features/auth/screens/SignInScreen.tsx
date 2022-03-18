import React from 'react';
import {VStack} from 'native-base';
import AuthFormContainer from '../components/AuthFormContainer/AuthFormsContainer';
import {signInFields, signInInitialValues} from '../helpers/constants';
import {TextInput} from 'react-native';

const SignInScreen: React.FC = () => {
  return (
    <VStack space={'sm'} p={2}>
      <AuthFormContainer
        fields={signInFields}
        submitButtonText={'Sign In'}
        initialValues={signInInitialValues}
        onSubmit={values => console.log(values)}
      />
      <TextInput />
    </VStack>
  );
};

export default SignInScreen;
