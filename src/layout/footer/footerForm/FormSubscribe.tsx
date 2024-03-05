import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/Theme';

export const FormSubscribe: FC = () => {
  return (
    <StyledFormSubscribe>
      <Subscribe>Subscribe to our news</Subscribe>
      <InputSubscribe placeholder={'Enter your email'} />
      <ButtonSubscribe type={'submit'} value={'Submit'} />
    </StyledFormSubscribe>
  );
};

const StyledFormSubscribe = styled.form`
  @media ${theme.media.mobile} {
    text-align: center;
  }
`;
const Subscribe = styled.label`
  display: block;
  margin-top: -14px;
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
`;
const InputSubscribe = styled.input`
  margin: 10px 0;
  background: transparent;
  padding: 10px;
  border: 1px solid ${theme.colors.bgButton.hoverBg};
  color: ${theme.colors.font.primary};
  outline: none;
  &:focus {
    border-color: ${theme.colors.bgButton.activeBg};
  }
`;

const ButtonSubscribe = styled.input`
  margin-left: 10px;
  padding: 10px 40px;
  border-radius: 5px;
  border: 1px solid ${theme.colors.bgHeader.secondaryBg};
  background: #f1f3f2;
  &:focus {
    border-color: ${theme.colors.bgButton.activeBg};
    color: ${theme.colors.bgButton.activeBg};
  }
  &:hover {
    color: ${theme.colors.bgButton.activeBg};
  }
`;
