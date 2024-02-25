import styled from 'styled-components';

type TextPropsType = {
  fontWeight?: number;
  lineheight?: string;
  color?: string;
};
export const Text = styled.p<TextPropsType>`
  font-weight: ${(props) => props.fontWeight || 400};
  line-height: ${(props) => props.lineheight || '130%'};
  color: ${(props) => props.color || '#000000'};
`;
