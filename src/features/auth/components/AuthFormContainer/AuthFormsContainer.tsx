import React from 'react';
import {Formik, FormikConfig, FormikValues} from 'formik';
import {Button, FormControl, Input, VStack} from 'native-base';

interface Field {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}

interface AuthFormContainerProps extends FormikConfig<FormikValues> {
  fields: Field[];
  submitButtonText: string;
}

const AuthFormContainer: React.FC<AuthFormContainerProps> = ({
  submitButtonText,
  fields,
  ...props
}) => {
  return (
    <Formik {...props}>
      {({handleChange, errors, handleBlur, handleSubmit, values}) => {
        return (
          <VStack space={'sm'}>
            {fields.map(({name, label, placeholder, type}) => (
              <FormControl key={name}>
                <FormControl.Label>{label}</FormControl.Label>
                <Input
                  value={values[name]}
                  onChangeText={handleChange(name)}
                  onBlur={handleBlur(name)}
                  placeholder={placeholder}
                  type={type}
                />
                <FormControl.HelperText>{errors[name]}</FormControl.HelperText>
              </FormControl>
            ))}
            <Button onPress={handleSubmit}>{submitButtonText}</Button>
          </VStack>
        );
      }}
    </Formik>
  );
};

export default AuthFormContainer;
