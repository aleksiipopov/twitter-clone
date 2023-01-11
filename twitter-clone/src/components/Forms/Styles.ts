import style from 'styled-components';
import { Form, Field } from 'formik';

export const FormStyled = style(Form)`
  margin: 20px auto;
  width: 428px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    margin: 5px 5px 10px;
    color: #D8000C;
  }
  input[error] {
    border-color: #D8000C;
  }
  button[disabled] {
    background: #42434B;
    color: #CBCCD6;
  }
`

export const FormInputStyled = style(Field)`
  height: 55px;
  margin: 10px 0;
  background: #FFFFFF;
  border: 2px solid #42434B;
  border-radius: 8px;
  padding-left: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
  input::placeholder {
    color: #727374;
  }
`

export const FormButtonStyled = style.button`
  width: 139px;
  height: 55px;
  margin-left: auto;
  background: #CBCCD6;
  border: 2px solid #42434B;
  border-radius: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
  color: #42434B;
`