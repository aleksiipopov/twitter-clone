import React from "react";
import { FormLignIn, WrapperForContainer } from "../../components";

export const Login = () => {
  return (
    <WrapperForContainer
      title="Log in"
      helperText="Don’t have an account?"
      link={{title: "Sign up", href: '/signup'}}
    >
      <FormLignIn />
    </WrapperForContainer>
  )
}