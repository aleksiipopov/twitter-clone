import React, { useCallback } from "react";
import {
  FormStyled,
  FormInputStyled,
  FormButtonStyled 
} from '../Styles';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { IErrorObj } from "../../../helpers/interfaces";
import { BASE_URL_SERVER } from "../../../helpers/constants";

export const FormSignUp = () => {
  
  const signUpSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(512, 'Too Long!')
      .required('Required'),
    fullname: Yup.string()
      .min(2, 'Too Short!')
      .max(512, 'Too Long!')
      .required('Required')
  })

  const handleSubmit = useCallback(async (values: IErrorObj) => {
    //TODO
    fetch(BASE_URL_SERVER + `/users`,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        id: values.username,
        name: values.fullname,
        email: values.email
      })
    }).then(() => {window.location.pathname = `/twitters/${values.username}`;});
    console.log(values)
  }, [])

  function setError(showError: boolean, errorMessage?: string) {
    if(showError || (errorMessage === 'Required' && showError)) {
      return errorMessage;
    }
    return;
  }

  function setDisableButton({email, password, username, fullname}: IErrorObj, isSubmitting: boolean) {
    if(!email && !password && !username && !fullname) {
      return isSubmitting;
    }
    return true;
  }

  return (
    <Formik
    initialValues={{ email: '', password: '', username: '', fullname: '' }}
    validationSchema={signUpSchema}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        handleSubmit(values);
      }, 400);
    }}
  >
    {({ isSubmitting, errors, values }) => (
      <FormStyled>
        <FormInputStyled
          type="email"
          name="email"
          placeholder="Email"
          error={setError(!!values.email, errors.email)}
        />
        <ErrorMessage name="email" component="div" />
        <FormInputStyled
          type="password"
          name="password"
          placeholder="Password"
          error={setError(!!values.password, errors.password)}
        />
        <ErrorMessage name="password" component="div" />
        <FormInputStyled
          type="text"
          name="username"
          placeholder="Username"
          error={setError(!!values.username, errors.username)}
        />
        <ErrorMessage name="username" component="div" />
        <FormInputStyled
          type="text"
          name="fullname"
          placeholder="Full name"
          error={setError(!!values.fullname, errors.fullname)}
        />
        <ErrorMessage name="fullname" component="div" />
        <FormButtonStyled type="submit" disabled={setDisableButton(errors, isSubmitting)}>
          Sign up
        </FormButtonStyled>
      </FormStyled>
    )}
  </Formik>
  )
}