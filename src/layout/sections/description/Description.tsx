import { FC } from 'react';
import styled from 'styled-components';
import { Container } from '@/components/Container';
import { Photo } from '@/components/photo/Photo';
import photoMen from '../../../assets/bgImg/bamboo-cap.webp';
import { TitleSection } from '@/components/TitleSection';
import { Text } from '@/components/Text';
import { theme } from '@/styles/Theme';
import { TitleText } from '@/components/TitleText';
import { SliderAnimals } from './sliderAnimal/SliderAnimals';
import panda from '../../../assets/animalsPhotoSlider/panda.webp';
import eagle from '../../../assets/animalsPhotoSlider/eagle.webp';
import alligators from '../../../assets/animalsPhotoSlider/alligators.webp';
import cheetah from '../../../assets/animalsPhotoSlider/cheetah.webp';
import gorilla from '../../../assets/animalsPhotoSlider/gorilla.webp';
import penguin from '../../../assets/animalsPhotoSlider/penguin.webp';
import sloth from '../../../assets/animalsPhotoSlider/sloth.webp';
import flower1 from '../../../assets/flowers/flower_foto1.png';
import flower2 from '../../../assets/flowers/palm_foto.png';
import flower3 from '../../../assets/flowers/strelitzia 1.png';
import { Button } from '@/components/button/Button';

export type DataAnimalsType = {
  name: string;
  arial: string;
  iconId: string;
  url: string;
};

const dataAnimals: DataAnimalsType[] = [
  { name: 'Giant pandas', arial: 'Native to Southwest China', iconId: 'banana', url: panda },
  { name: 'Eagles', arial: 'Native to South America', iconId: 'meat', url: eagle },
  { name: 'Giant pandas', arial: 'Native to Congo', iconId: 'banana', url: gorilla },
  { name: 'Giant pandas', arial: 'Mesoamerica, South America', iconId: 'banana', url: sloth },
  { name: 'Giant pandas', arial: 'Native to Africa', iconId: 'meat', url: cheetah },
  { name: 'Giant pandas', arial: 'Native to Antarctica', iconId: 'meat', url: penguin },
  { name: 'Giant pandas', arial: 'Native to Southeastern U. S.', iconId: 'meat', url: alligators },
];

const dataFlowers = [flower1, flower2, flower3];
export const Description: FC = () => {
  return (
    <StyledDescription>
      <Container>
        <DescriptionWrap>
          <Photo src={photoMen} alt={'man with hat'} />
          <TextContainer>
            <TitleSection color={theme.colors.font.secondary}>The Backstage of the Wilderness World.</TitleSection>
            <Text color={theme.colors.font.secondary}>
              The site was founded on the basis of a volunteer movement to protect and care for animals.
            </Text>
            <TitleText color={theme.colors.font.secondary}>How it works </TitleText>
            <Text color={theme.colors.font.secondary} lineheight={'140%'}>
              The main goal is to help the animals, as well as the nature reserves and zoos where they are kept. We are
              currently working on video projects targeting pandas in China, eagles on an island near Los Angeles,
              alligators in Florida and gorillas in the Congo. These have a total of more than 1,500 mammals and
              reptiles.
            </Text>
          </TextContainer>
        </DescriptionWrap>
        <SliderAnimals dataAnimals={dataAnimals} />
        <ButtonWrap>
          <Button>choose your favorite</Button>
        </ButtonWrap>
      </Container>
      {dataFlowers.map((item, index) => {
        return <FlowerImg src={item} key={index} alt={'flower'} />;
      })}
    </StyledDescription>
  );
};
const StyledDescription = styled.section`
  position: relative;
  padding: 140px 0 100px 0;
`;
const ButtonWrap = styled.div`
  margin-top: 80px;
  width: 100%;
  text-align: center;
`;

const FlowerImg = styled.img`
  object-fit: cover;
  position: absolute;

  &:nth-child(2) {
    right: -94px;
    top: 0;
  }

  &:nth-child(3) {
    width: 880px;
    height: 460px;
    bottom: 0;
    left: -588px;
  }

  &:last-child {
    right: 0;
    bottom: 0;
  }
`;
const DescriptionWrap = styled.div`
  width: 100%;
  display: flex;
  column-gap: 86px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
