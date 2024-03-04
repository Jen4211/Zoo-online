import React, { FC } from 'react';
import styled from 'styled-components';

export const FormSubscribe: FC = () => {
  return (
    <StyledFormSubscribe>
      <Subscribe>Subscribe to our news</Subscribe>
      <InputSubscribe />
      <ButtonSubscribe type={'submit'} value={'Submit'} />
    </StyledFormSubscribe>
  );
};

const StyledFormSubscribe = styled.form``;
const Subscribe = styled.label`
  display: block;
  margin-top: -14px;
`;
const InputSubscribe = styled.input``;

const ButtonSubscribe = styled.input``;
