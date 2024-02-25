import styled from 'styled-components';

type TitleParagraphPropsType = {
  color?: string;
};
export const TitleParagraph = styled.h5<TitleParagraphPropsType>`
  color: ${(props) => props.color || '#000000'};
`;
