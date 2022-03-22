import * as yup from 'yup';
import {number, string} from 'yup';

export const signInSchema = yup.object().shape({
  email: string().email().required(),
  password: string().required().min(6),
});

export const signUpSchema = yup.object().shape({
  email: string().email().required(),
  password: string().required().min(6),
  name: string().required(),
  surname: string().required(),
  age: number().min(0).integer().required(),
});
