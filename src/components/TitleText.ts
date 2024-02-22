import styled from 'styled-components';

type TitleTextPropsType = {
  fontWeight?: number;
  lineHeight?: string;
  color?: string;
};
export const TitleText = styled.h5<TitleTextPropsType>`
  font-weight: ${(props) => props.fontWeight || 400};
  line-height: ${(props) => props.lineHeight || '120%'};
  color: ${(props) => props.color || '#000000'};
`;
