import styled from "styled-components";

type TitlePropsType = {
    color?: string
}
export const TitleSection = styled.h3<TitlePropsType>`
color: ${props => props.color || "#000000"};
  text-align: center;
`