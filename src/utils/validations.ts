import { ISignUpProps, ISignInProps } from '../identity';

export const validateSignUp = (values: ISignUpProps) => {
  const errors = {};
  validateFullName(values.fullname, errors);
  validateEmail(values.email, errors);
  validatePassword(values.password, errors);
  return errors;
};

export const validateSignIn = (values: ISignInProps) => {
  const errors = {};
  validateEmail(values.email, errors);
  validatePassword(values.password, errors);
  return errors;
};

const validateFullName = (fullname: string, errors: any) => {
  if (!fullname) {
    errors.fullname = 'Full name is required';
  }
};

const validateEmail = (email: string, errors: any) => {
  if (!email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address';
  }
};

const validatePassword = (password: string, errors: any) => {
  if (!password) {
    errors.password = 'Password is required';
  } else if (password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }
};