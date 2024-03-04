import React, { FC } from 'react';
import styled from 'styled-components';
import { Container } from '@/components/Container';
import { Logo } from '@/components/logo/Logo';
import { Button } from '@/components/button/Button';
import { Menu } from '@/components/menu/Menu';
import { dataMenuItems } from '../header/Header';
import { FormSubscribe } from '@/layout/footer/footerForm/FormSubscribe';
import { NavNetWorks } from '@/layout/footer/navNetWorks/NavNetWorks';

export type DataNetWorkLinksType = {
  iconId: string;
  title?: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

const dataNetWorkLinks: DataNetWorkLinksType[] = [
  { iconId: 'f', title: 'Facebook', width: '8', height: '16', viewBox: '0 0 8 16' },
  { iconId: 't', title: 'Twitter', width: '16', height: '14', viewBox: '0 0 16 14' },
  { iconId: 'i', title: 'Instagram', width: '16', height: '16', viewBox: '0 0 16 16' },
  { iconId: 'y', title: 'YouTube', width: '18', height: '13', viewBox: '0 0 18 13' },
];
export const Footer: FC = () => {
  return (
    <StyledFooter>
      <Container>
        <GridContainer>
          <GridItem>
            <Logo />
          </GridItem>
          <GridItem>
            <FormSubscribe />
          </GridItem>
          <GridItem>
            <Button radius={'5px'}>donate for volunteers</Button>
          </GridItem>
          <GridItem>
            <NavNetWorks dataNetWorkLinks={dataNetWorkLinks} />
          </GridItem>
          <GridItem>
            <Menu menuItems={dataMenuItems.slice(0, 4)} />
          </GridItem>
          <GridItem>
            <AuthorInfo>© 2024 Evgeniy Huletskiy</AuthorInfo>
          </GridItem>
        </GridContainer>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  padding: 40px 0 50px;
  background: #111115;
`;
const GridContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
`;
const GridItem = styled.div`
  &:first-child {
    grid-column: 1/2;
    grid-row: 1/2;
  }
  &:nth-child(2) {
    grid-column: 3/4;
    grid-row: 1/2;
  }
  &:nth-child(3) {
    grid-column: 1/2;
    grid-row: 2/3;
    padding: 68px 0 44px;
  }
  &:nth-child(4) {
    grid-column: 1/2;
    grid-row: 3/4;
  }
  &:nth-child(5) {
    grid-column: 2/3;
    grid-row: 3/4;
    justify-self: center;
    align-self: end;
  }
  &:last-child {
    grid-column: 3/4;
    grid-row: 3/4;
    justify-self: end;
    align-self: end;
  }
`;

const AuthorInfo = styled.small`
  font-weight: 100;
  font-size: 16px;
  line-height: 130%;
  opacity: 0.6;
`;
