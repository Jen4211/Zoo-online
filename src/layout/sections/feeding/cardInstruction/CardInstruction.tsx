import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/Theme';
import { Icon } from '@/components/icon/Icon';
import { Text } from '@/components/Text';

type CardInstructionPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  text: string;
};
export const CardInstruction: FC<CardInstructionPropsType> = (props: CardInstructionPropsType) => {
  return (
    <StyledCardInstruction>
      <IconContainer>
        <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} />
      </IconContainer>
      <Text lineHeight={'140%'} color={theme.colors.font.secondary}>
        {props.text}
      </Text>
    </StyledCardInstruction>
  );
};

const StyledCardInstruction = styled.div`
  width: 168px;
  height: 244px;
  background: transparent;
`;
const IconContainer = styled.div`
  width: 100%;
  height: 168px;
  border-radius: 5px;
  border: 1px solid ${theme.colors.font.accent};
  background: ${theme.colors.font.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
