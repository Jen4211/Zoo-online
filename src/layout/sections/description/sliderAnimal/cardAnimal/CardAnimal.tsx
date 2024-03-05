import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/Theme';
import { Photo } from '@/components/photo/Photo';
import { Text } from '@/components/Text';
import { Icon } from '@/components/icon/Icon';

type CardAnimalPropsType = {
  url: string;
  name: string;
  arial: string;
  iconId: string;
};
export const CardAnimal: FC<CardAnimalPropsType> = (props: CardAnimalPropsType) => {
  return (
    <StyledCardAnimal>
      <Photo src={props.url} alt={props.name} />
      <WrapContent>
        <TextContainer>
          <Text fontWeight={600} lineHeight={'140%'}>
            {props.name}
          </Text>
          <Text fontWeight={300} lineHeight={'120%'}>
            {props.arial}
          </Text>
        </TextContainer>
        <Icon iconId={props.iconId} />
      </WrapContent>
    </StyledCardAnimal>
  );
};

const StyledCardAnimal = styled.div`
  max-width: 366px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${theme.colors.bgButton.hoverBg};
  overflow: hidden;
`;
const WrapContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px 16px 14px 16px;
`;
const TextContainer = styled.div`
  ${Text} {
    &:first-child {
      text-transform: uppercase;
    }
  }
`;
