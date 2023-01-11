import style from 'styled-components';
import { InitialsCircle } from './../Header/Styles';

export const BlockOfTweetStyles = style.div`
  width: 100%;
  padding: 10px 0;
  background: #FFFFFF;
  border: 2px solid #42434B;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  margin: 16px 0;
  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`

export const InitialsCircleTweetStyles = style(InitialsCircle)`
  width: 64px;
  box-sizing: border-box;
  border: 1px solid #727374;
  margin: 0;
  span {
    font-size: 16px;
  }
`

export const BlockOfAuthorStyles = style.div`
  width: auto;
  box-sizing: border-box;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  color: #42434B;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`

export const BlockOfContentStyles = style.div`
  width: 100%;
  box-sizing: border-box;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  color: #42434B;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`

export const TextOfTweetStyles = style.div`
  margin: 6px 0;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;
  color: #42434B;
`
