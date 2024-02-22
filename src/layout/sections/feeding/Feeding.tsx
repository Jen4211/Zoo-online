import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { Container } from '../../../components/Container';
import { TitleSection } from '../../../components/TitleSection';
import { TitleText } from '../../../components/TitleText';
import { Text } from '../../../components/Text';
import { TitleParagraph } from '../../../components/TitleParagraph';
import { Button } from '../../../components/button/Button';
import { CardInstruction } from './cardInstruction/CardInstruction';
import arrayDesktop from '../../../assets/arrays/Vector.svg';

const dataInstructionCard = [
  { iconId: 'pay', width: '108', height: '60', viewBox: '0 0 108 60', text: 'Pay with card' },
  { iconId: 'zoo', width: '87', height: '96', viewBox: '0 0 87 96', text: 'Payment goes to the zoo' },
  {
    iconId: 'monkey',
    width: '127',
    height: '73',
    viewBox: '0 0 127 73',
    text: 'Your favourite animal gets delicious dish',
  },
];
export const Feeding: FC = () => {
  return (
    <StyledFeeding>
      <Container>
        <WrapContent>
          <TitleSection color={theme.colors.font.accent}>Pick and feed a friend</TitleSection>
          <TextContainer>
            <TitleText color={theme.colors.font.secondary}>
              We know the animals bring you joy, and in these extraordinary times, we’re glad.
            </TitleText>
            <Text fontWeight={500} color={theme.colors.font.secondary}>
              During a time when the COVID-19 epidemic is touching all of our lives, we’re proud and glad that people
              around the world find joy in PatStory.
            </Text>
            <Text color={theme.colors.font.secondary}>
              Even though the zoo has reopened, we need you now more than ever to help us deal with these problems.
              Please consider a gift to our <span>Emergency Support Fund</span> .{' '}
            </Text>
          </TextContainer>
          <TitleParagraph color={theme.colors.font.secondary}>How it works</TitleParagraph>
          <CardContainer>
            {dataInstructionCard.map((item, index) => {
              return (
                <CardInstruction
                  iconId={item.iconId}
                  text={item.text}
                  width={item.width}
                  height={item.height}
                  viewBox={item.viewBox}
                  key={index}
                />
              );
            })}
            <WrapImg />
            <WrapImg />
          </CardContainer>
          <Button>Feed a friend now</Button>
        </WrapContent>
      </Container>
    </StyledFeeding>
  );
};

const StyledFeeding = styled.section`
  width: 100%;
  background: ${theme.colors.feedingBg.primaryFeed};
  padding: 60px 0 100px;
`;
const WrapContent = styled.div`
  border-radius: 20px;
  width: 100%;
  background: ${theme.colors.feedingBg.secondaryFeed};

  padding: 40px 0 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${TitleParagraph} {
    margin-top: 60px;
  }
`;
const TextContainer = styled.div`
  padding-left: 100px;
  padding-right: 20px;

  ${TitleText} {
    margin: 30px 0 40px;
  }

  ${Text} {
    &:last-child {
      margin-top: 10px;
      span {
        border-bottom: 1px solid ${theme.colors.font.accent};
      }
    }
  }
`;
const CardContainer = styled.div`
  margin: 40px 0 60px;
  display: flex;
  justify-content: center;
  column-gap: 130px;
  position: relative;
`;
const WrapImg = styled.div`
  position: absolute;
  background-image: url(${arrayDesktop});
  width: 67px;
  height: 35px;
  left: 26%;
  top: 70px;

  &:last-child {
    left: 74%;
    top: 70px;
    transform: translateX(-100%);
  }
`;
