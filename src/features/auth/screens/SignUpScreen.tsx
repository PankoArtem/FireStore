import React from 'react';
import AuthFormContainer from '../components/AuthFormContainer/AuthFormsContainer';
import {signUpFields, signUpInitialValues} from '../helpers/constants';
import {VStack} from 'native-base';
import {useDispatch} from 'react-redux';
import {signUpThunk} from '../thunks';
import {FormikValues} from 'formik';

const SignUpScreen: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({
    email,
    password,
    name,
    surname,
    age,
  }: FormikValues) => {
    dispatch(signUpThunk({email, password, name, surname, age}));
  };

  return (
    <VStack space={'sm'} p={2}>
      <AuthFormContainer
        fields={signUpFields}
        submitButtonText={'Sign In'}
        initialValues={signUpInitialValues}
        onSubmit={handleSubmit}
      />
    </VStack>
  );
};

export default SignUpScreen;
