import styled from 'styled-components';
import bamboo from '../../assets/bamboo.svg';
import { FC } from 'react';

export const Logo: FC = () => {
  return (
    <LogoContainer>
      <MainTitle>
        PetStory <br />
        online
      </MainTitle>
      <img src={bamboo} alt={'bamboo'} />
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  border: 1px solid #fff;
  border-radius: 2px;
  width: 82px;
  position: relative;

  img {
    position: absolute;
    left: 10px;
    top: 20px;
  }
`;
const MainTitle = styled.h1`
  font-weight: 400;
  font-size: 19px;
  line-height: 120%;
  text-align: center;
`;
