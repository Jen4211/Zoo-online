import styled from "styled-components";

type PhotoPropsType = {
    width?: string
    height?: string
}

export const Photo = styled.img<PhotoPropsType>`
  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};
  object-fit: cover;
`