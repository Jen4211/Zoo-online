import React, { FC } from 'react';
import styled from 'styled-components';
import { Container } from '@/components/Container';
import { Button } from '@/components/button/Button';
import flowerImg from '@/assets/flowers/leav_foto.png';
import { TitleSection } from '@/components/TitleSection';
import { TestimonialSlider } from '@/layout/sections/testimonials/testimonialSlider/TestimonialSlider';
import user1 from '@/assets/users/Ellipse 2.svg';
import user2 from '@/assets/users/user_icon.svg';
import user3 from '@/assets/users/Ellipse 3.svg';
import user4 from '@/assets/users/Ellipse 4.svg';
import { theme } from '@/styles/Theme';

export type TestimonialCardsType = {
  url: string;
  location: string;
  date: string;
  name: string;
  text: string;
};

const dataTestimonialCards: TestimonialCardsType[] = [
  {
    url: user1,
    location: 'Local Austria',
    date: 'Yesterday',
    name: 'Mila Riksha',
    text: 'My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.',
  },
  {
    url: user2,
    location: 'Local Austria',
    date: 'Today',
    name: 'Michael John ',
    text: 'The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.',
  },
  {
    url: user3,
    location: 'Local Austria',
    date: 'Yesterday',
    name: 'Oskar Samborsky',
    text: 'Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.',
  },
  {
    url: user4,
    location: 'Local Austria',
    date: 'Yesterday',
    name: 'Fredericka Michelin',
    text: 'The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.',
  },
];
export const Testimonials: FC = () => {
  return (
    <StyledTestimonials>
      <Container>
        <TitleSection>Testimonials</TitleSection>
        <TestimonialSlider dataTestimonialCards={dataTestimonialCards} />
        <LineScrollWrap>
          <LineScrollBorder>
            <LineScrollContainer>
              <Scroll />
            </LineScrollContainer>
          </LineScrollBorder>
        </LineScrollWrap>
        <Button radius={'none'}>leave feedback</Button>
      </Container>
      <FlowerTestimonial src={flowerImg} alt={'flower'} />
    </StyledTestimonials>
  );
};
const StyledTestimonials = styled.section`
  padding: 100px 0 60px;
  position: relative;
  background-color: transparent;
`;
const FlowerTestimonial = styled.img`
  object-fit: cover;
  position: absolute;
  bottom: -160px;
  right: -162px;
`;

const LineScrollWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LineScrollBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 600px;
  width: 100%;
  height: 8px;
  background: ${theme.colors.border.background};
  border-radius: 5px;
  margin-bottom: 110px;
`;

const LineScrollContainer = styled.div`
  position: relative;
  width: 598px;
  height: 6px;
  border-radius: 5px;
  background: ${theme.colors.testimonialBg};
`;
const Scroll = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 25%;
  display: inline-block;
  height: 6px;
  border-radius: 5px;
  background: ${theme.colors.font.accent};
`;
