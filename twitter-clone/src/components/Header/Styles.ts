import style from 'styled-components';

export const HeaderWrapperStyled = style.header`
  width: 100%;
  padding: 23px 82px;
  background-color: #CBCCD6;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  font-family: 'Open Sans';
  font-style: normal;
  font-size: 24px;
  line-height: 33px;

  a {
    color: #727374;
    text-decoration: none;
  }
`

export const HeaderContentBlock = style.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InitialsCircle = style.div`
  width: 64px;
  height: 64px;
  margin-left: 18px;
  border-radius: 50%;
  background: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 42px;
  color: #727374;

  a {
    font-size: 16px;
  }
`