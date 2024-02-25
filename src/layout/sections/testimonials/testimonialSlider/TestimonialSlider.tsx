import React, { FC } from 'react';
import styled from 'styled-components';
import { SlidTestimonial } from '@/layout/sections/testimonials/testimonialSlider/slidTestimonial/SlidTestimonial';
import { TestimonialCardsType } from '@/layout/sections/testimonials/Testimonials';

type TestimonialSliderPropsType = {
  dataTestimonialCards: TestimonialCardsType[];
};
export const TestimonialSlider: FC<TestimonialSliderPropsType> = (props) => {
  return (
    <StyledTestimonialSlide>
      {props.dataTestimonialCards.map((item, index) => {
        return (
          <SlidTestimonial
            text={item.text}
            location={item.location}
            url={item.url}
            date={item.date}
            userName={item.name}
            key={index}
          />
        );
      })}
    </StyledTestimonialSlide>
  );
};

const StyledTestimonialSlide = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 70px 0 78px;
`;
