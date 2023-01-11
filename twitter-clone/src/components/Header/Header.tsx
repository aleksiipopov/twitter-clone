import React from "react";
import { initInitials } from "../../helpers/helpers";
import { Logo } from "../../icons";
import {
  HeaderWrapperStyled,
  HeaderContentBlock,
  InitialsCircle,
} from "./Styles";

export const Header = ({userName}: { userName?: string }) => {
  const initials = initInitials(userName || '');
  return (
    <HeaderWrapperStyled>
      <HeaderContentBlock>
        <Logo />
        Another Twitter Clone
      </HeaderContentBlock>
      <HeaderContentBlock>{userName || <a href="/signup">Sign Up</a>}<InitialsCircle>{initials || <a href="/login">Login In</a>}</InitialsCircle></HeaderContentBlock>
    </HeaderWrapperStyled>
  )
}