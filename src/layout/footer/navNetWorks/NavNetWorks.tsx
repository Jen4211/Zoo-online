import React, { FC } from 'react';
import styled from 'styled-components';
import { DataNetWorkLinksType } from '../Footer';
import { Icon } from '@/components/icon/Icon';
import { Text } from '@/components/Text';
import { theme } from '@/styles/Theme';

type NavNetWorksPropsType = {
  dataNetWorkLinks: DataNetWorkLinksType[];
};
export const NavNetWorks: FC<NavNetWorksPropsType> = (props) => {
  const { dataNetWorkLinks } = props;
  return (
    <StyledNavNetWorks>
      <ListNetWork>
        {dataNetWorkLinks.map((i, index) => {
          return (
            <ItemNetWork key={index}>
              <IconWrap>
                <Icon iconId={i.iconId} width={i.width} height={i.height} viewBox={i.viewBox} />
              </IconWrap>
              <Text lineHeight={'140%'} color={theme.colors.font.primary}>
                {i.title}
              </Text>
            </ItemNetWork>
          );
        })}
      </ListNetWork>
    </StyledNavNetWorks>
  );
};
const StyledNavNetWorks = styled.nav``;
const ListNetWork = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  row-gap: 10px;
  @media ${theme.media.tablet} {
    gap: 20px;
    }
  @media ${theme.media.mobile} {
    flex-direction: row;
  }
  }
`;
const ItemNetWork = styled.li`
  display: flex;
  column-gap: 12px;
  @media ${theme.media.tablet} {
    ${Text} {
      display: none;
    }
  }
`;
const IconWrap = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 100%;
  background: rgba(196, 196, 196, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
