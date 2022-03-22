import React from 'react';
import AuthFormContainer from '../components/AuthFormContainer';
import {signUpFields, signUpInitialValues} from '../helpers/constants';
import {VStack} from 'native-base';
import {useDispatch} from 'react-redux';
import {signUpThunk} from '../thunks';
import {FormikValues} from 'formik';
import {signUpSchema} from '../helpers/validationSchemas';

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
        submitButtonText={'Sign Up'}
        initialValues={signUpInitialValues}
        onSubmit={handleSubmit}
        validationSchema={signUpSchema}
      />
    </VStack>
  );
};

export default SignUpScreen;
