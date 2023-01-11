import style from 'styled-components';

export const SignUpWrapperStyled = style.div`
  margin: 10% auto 0;
  width: 520px;
  border: 1px #42434B solid;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
  color: #727374;
  border-radius:  8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const SignUpTitleStyled = style.h2`
  font-weight: 400;
  font-size: 28px;
  width: auto;
  margin: auto;
  padding: 30px 0 20px;
  cursor: default;
`
export const SignUpHelperTextStyled = style.h4`
  width: max-content;
  margin: 20px auto;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;
  color: #42434B;
  cursor: default;
`

export const SignUpHelperTextLinkStyled = style.a`
  color: #42434B;
  cursor: pointer;
`