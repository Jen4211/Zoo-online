import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/Theme';
import { Photo } from '@/components/photo/Photo';
import { Text } from '@/components/Text';

type SlidTestimonialPropsType = {
  url: string;
  userName: string;
  location: string;
  date: string;
  text: string;
};
export const SlidTestimonial: FC<SlidTestimonialPropsType> = (props) => {
  return (
    <SlidTestimonialBorder>
      <SlidTestimonialContent>
        <HeaderSlidContainer>
          <Photo src={props.url} alt={'photo users'} width={'37px'} height={'37px'} />
          <HeaderSlid>
            <Text lineheight={'120%'}>{props.userName}</Text>
            <Text lineheight={'120%'} fontWeight={300} color={theme.colors.font.gray}>
              {props.location + ' • ' + props.date}
            </Text>
          </HeaderSlid>
        </HeaderSlidContainer>
        <SlidContent>
          <Text lineheight={'120%'} color={theme.colors.font.gray} fontWeight={300}>
            {props.text}
          </Text>
        </SlidContent>
      </SlidTestimonialContent>
    </SlidTestimonialBorder>
  );
};

const SlidTestimonialBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 266px;
  width: 100%;
  height: 392px;
  background: ${theme.colors.border.background};
  border-radius: 20px;
`;
const SlidTestimonialContent = styled.div`
  width: 264px;
  height: 390px;
  border-radius: 20px;
  padding: 15px 15px 20px 16px;
  overflow: hidden;
  background: ${theme.colors.testimonialBg};
`;
const HeaderSlidContainer = styled.div`
  display: flex;
  justify-content: start;
  column-gap: 10px;
`;
const HeaderSlid = styled.div``;
const SlidContent = styled.div`
  margin-top: 10px;
`;
