import React from "react";
import { FormSignUp, WrapperForContainer } from '../../components'

export const Signup = () => {
  return (
    <WrapperForContainer 
      title="Sign up"
      helperText="Already have an account?"
      link={{ title: 'Log in', href: '/login' }}>
        <FormSignUp />
      </WrapperForContainer>
  )
}