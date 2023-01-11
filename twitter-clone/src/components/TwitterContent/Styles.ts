import { Field, Form } from 'formik';
import style from 'styled-components';
import { FormButtonStyled } from '../Forms/Styles';

export const TwitterContentWrapper = style.div`
  width: 60%;
  margin: auto;
`

export const TwitterInputWrapper = style(Field)`
  width: 100%;
  height: 120px;
  padding: 12px 18px;
  margin: 34px 0 12px;
  box-sizing: border-box;
  background: #FFFFFF;
  border: 2px solid #42434B;
  border-radius: 8px;
  resize: none;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;

  &::placeholder {
    color: #727374;
  }

  &[error] {
    border-color: #D8000C;
  }
`

export const TweetButtonStyle = style(FormButtonStyled)`
  margin-right: 2px;

  &[disabled] {
    background: #42434B;
    color: #CBCCD6;
  }
`

export const TweetFormStyles = style(Form)`
  display: flex;
  flex-direction: column;
  justify-content: end;

  div {
    color: #D8000C;
  }
`
