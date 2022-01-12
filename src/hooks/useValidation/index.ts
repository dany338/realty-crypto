import { useState, useEffect, useCallback } from 'react';
import { SyntheticEvent } from '../../identity';

const useValidation = (initialState: any, validate: any, fn: any) => {
  const [ values, setValues ] = useState(initialState);
  const [ errors, setErrors ] = useState({})
  const [ request, setRequest ] = useState(false);

  const memoizedCallback = useCallback(
    () => {
      setRequest(!request);
    },
    [request],
  );

  useEffect(() => {
    if (request) {
      const withoutErrors = Object.keys(errors).length === 0 && Object.keys(validate(values)).length === 0;
      if (withoutErrors) {
        fn();
        memoizedCallback();
      }
    }
  }, [errors, fn, request, values, validate, memoizedCallback]);

  const handleChange = (e: SyntheticEvent<HTMLFormElement>): void => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const errorsValidation = validate(values);
    setErrors(errorsValidation);
    setRequest(Object.keys(errorsValidation).length === 0);
    e.stopPropagation();
  };

  return [
    errors,
    values,
    handleChange,
    handleSubmit
  ];
}

export default useValidation;
