import styled from "styled-components";
import {theme} from "../../styles/Theme";


type ButtonPropsType = {
    radius?: string
    background?: string
}
export const Button = styled.button<ButtonPropsType>`
  width: 298px;
  height: 54px;
  border-radius: ${props => props.radius || "25px"};
  background: ${props => props.background || theme.colors.bgButton.defaultBg};
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;

  &:hover {
    background: ${theme.colors.bgButton.hoverBg};
  }
  
  &:active {
    background: ${theme.colors.bgButton.activeBg};
  }
`