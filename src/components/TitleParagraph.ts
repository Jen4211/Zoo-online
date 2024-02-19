import styled from "styled-components";

type TitleParagraphPropsType = {
    fontWeight?: number
    lineHeight?: string
    color?: string
}
export const TitleParagraph = styled.h4<TitleParagraphPropsType>`
  font-weight: ${props => props.fontWeight || 400};
  line-height: ${props => props.lineHeight || "120%"};
  color: ${props => props.color || "#000000"};
`