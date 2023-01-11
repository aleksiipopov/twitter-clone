import React, { FC, ReactNode } from "react";
import {
  SignUpTitleStyled,
  SignUpWrapperStyled,
  SignUpHelperTextStyled,
  SignUpHelperTextLinkStyled
} from "./Styles";

interface IWrapperForContainerProps {
  title: string;
  helperText: string;
  link: {
    title: string;
    href: string;
  };
  children: ReactNode;
}

export const WrapperForContainer: FC<IWrapperForContainerProps> = ({
  title,
  helperText,
  link,
  children
}) => {
  return(
    <>
    <SignUpWrapperStyled>
      <SignUpTitleStyled>{title}</SignUpTitleStyled>
      {children}
    </SignUpWrapperStyled>
    <SignUpHelperTextStyled>{helperText + ' '}
      <SignUpHelperTextLinkStyled href={link.href}>{link.title}</SignUpHelperTextLinkStyled>
    </SignUpHelperTextStyled>
  </>
  )
}