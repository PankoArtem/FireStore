export const signInFields = [
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Email',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Password',
    type: 'password',
  },
];

export const signUpFields = [
  ...signInFields,
  {
    name: 'name',
    label: 'Name',
    placeholder: 'Name',
  },
  {
    name: 'surname',
    label: 'Surname',
    placeholder: 'Surname',
  },
  {
    name: 'age',
    label: 'Age',
    placeholder: 'Age',
  },
];

export const signInInitialValues = {
  email: '',
  password: '',
};

export const signUpInitialValues = {
  ...signInInitialValues,
  name: '',
  surname: '',
  age: '',
};
