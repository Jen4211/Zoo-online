import React, { FC } from 'react';
import styled from 'styled-components';
import bgImg from '../../../assets/bgImg/Giant-Panda.webp';
import { theme } from '@/styles/Theme';
import { Button } from '@/components/button/Button';
export const Main: FC = () => {
  return (
    <StyledMain>
      <TitleContainer>
        <Title>
          Watch your <span>favorite</span> animal online
        </Title>
        <Button>What online</Button>
      </TitleContainer>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  width: 100%;
  height: 780px;
  background: url(${bgImg}) no-repeat center / cover;
  position: relative;
  z-index: 1;
`;
const TitleContainer = styled.div`
  position: absolute;
  width: 465px;
  height: 465px;
  border-radius: 100%;
  background: ${theme.colors.bgButton.defaultBg};
  left: 50%;
  top: 92px;
  padding: 74px 0 0 74px;
  text-align: center;
  ${Button} {
    margin-top: 60px;
  }
`;
const Title = styled.h2`
  font-weight: 700;
  font-size: 106px;
  line-height: 75%;
  text-transform: uppercase;
  text-align: center;

  span {
    color: ${theme.colors.accentBg};
  }
`;
