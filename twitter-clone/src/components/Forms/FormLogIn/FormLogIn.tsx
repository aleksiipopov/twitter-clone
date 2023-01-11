import React, { useCallback, useState } from "react";
import {
  FormStyled,
  FormInputStyled,
  FormButtonStyled 
} from '../Styles';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BASE_URL_SERVER } from "../../../helpers/constants";
import { IErrorObj, IUser } from "../../../helpers/interfaces";

export const FormLignIn = () => {
    const [errorFetch, setErrorFetch] = useState<string>('');

  
    const signUpSchema = Yup.object().shape({
      password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      username: Yup.string()
        .min(2, 'Too Short!')
        .max(512, 'Too Long!')
        .required('Required')
    })
  
    const handleSubmit = useCallback(async (values: IErrorObj) => {
      const response = await fetch(BASE_URL_SERVER + `/users/${values.username}`);
      if(response.status === 200) {
        const existedUser: IUser = await response.json();
        setErrorFetch('');
        window.location.pathname = `/twitters/${existedUser.id}`;
        return;
      }
      setErrorFetch('User is not existed');
    }, [])
  
    function setError(showError: boolean, errorMessage?: string) {
      if(showError || (errorMessage === 'Required' && showError)) {
        return errorMessage;
      }
      return;
    }
  
    return (
      <Formik
      initialValues={{ email: '', password: '', username: '', fullname: '' }}
      validationSchema={signUpSchema}
      onSubmit={(values) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          handleSubmit(values);
        }, 400);
      }}
    >
      {({ errors, values }) => {

        return (
        <FormStyled>
          <FormInputStyled
            type="text"
            name="username"
            placeholder="Username"
            error={setError(!!values.username, errors.username)}
            onBlur={() => {
              setErrorFetch('')
            }}
          />
          <ErrorMessage name="username" component="div" />
          {<div>{errorFetch}</div>}
          <FormInputStyled
            type="password"
            name="password"
            placeholder="Password"
            error={setError(!!values.password, errors.password)}
          />
          <ErrorMessage name="password" component="div" />
          <FormButtonStyled type="submit" disabled={!!errors.password || !!errors.username || !!errorFetch}>
            Log in
          </FormButtonStyled>
        </FormStyled>
      )}}
    </Formik>
    )
  };
  