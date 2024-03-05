import React, { FC } from 'react';
import styled from 'styled-components';
import { DataAnimalsType } from '../Description';
import { CardAnimal } from './cardAnimal/CardAnimal';
import { Icon } from '@/components/icon/Icon';
import { theme } from '@/styles/Theme';

type SliderAnimalsPropsType = {
  dataAnimals: DataAnimalsType[];
};

export const SliderAnimals: FC<SliderAnimalsPropsType> = (props: SliderAnimalsPropsType) => {
    const { dataAnimals } = props
  return (
    <StyledSliderAnimals>
      {dataAnimals.slice(0, 6).map((item, index) => {
        return <CardAnimal url={item.url} name={item.name} arial={item.arial} iconId={item.iconId} key={index} />;
      })}
      <PrefButtonContainer>
        <ButtonSlider>
          <Icon iconId={'left'} width={'18'} height={'10'} viewBox={'0 0 18 10'} />
        </ButtonSlider>
      </PrefButtonContainer>
      <NextButtonContainer>
        <ButtonSlider>
          <Icon iconId={'right'} width={'18'} height={'10'} viewBox={'0 0 18 10'} />
        </ButtonSlider>
      </NextButtonContainer>
    </StyledSliderAnimals>
  );
};
const StyledSliderAnimals = styled.div`
  position: relative;
  margin-top: 180px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px 20px;
`;
const ButtonSlider = styled.button`
  width: 62px;
  height: 62px;
  border-radius: 100%;
  background: ${theme.colors.bgButton.defaultBg};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${theme.colors.bgButton.hoverBg};
  }
  &:active {
    background: ${theme.colors.bgButton.activeBg};
  }
`;

const PrefButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -82px;
`;
const NextButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -62px;
`;
