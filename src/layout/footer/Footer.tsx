import React, { FC } from 'react';
import styled from 'styled-components';
import { Container } from '@/components/Container';
import { Logo } from '@/components/logo/Logo';
import { Button } from '@/components/button/Button';
import { Menu } from '@/components/menu/Menu';
import { dataMenuItems } from '../header/Header';
import { FormSubscribe } from '@/layout/footer/footerForm/FormSubscribe';
import { NavNetWorks } from '@/layout/footer/navNetWorks/NavNetWorks';
import { theme } from '@/styles/Theme';

export type DataNetWorkLinksType = {
  iconId: string;
  title?: string;
  url?: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

const dataNetWorkLinks: DataNetWorkLinksType[] = [
  { iconId: 'f', title: 'Facebook', url: 'https://www.facebook.com/', width: '8', height: '16', viewBox: '0 0 8 16' },
  { iconId: 't', title: 'Twitter', url: 'https://twitter.com/', width: '16', height: '14', viewBox: '0 0 16 14' },
  {
    iconId: 'i',
    title: 'Instagram',
    url: 'https://www.instagram.com/',
    width: '16',
    height: '16',
    viewBox: '0 0 16 16',
  },
  { iconId: 'y', title: 'YouTube', url: 'https://www.youtube.com/', width: '18', height: '13', viewBox: '0 0 18 13' },
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
  @media ${theme.media.smallDesktop} {
    padding: 40px 18px 50px 42px;
  }
  @media ${theme.media.tablet} {
    padding: 20px 12px;
  }
`;
const GridContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(4, auto);
  @media ${theme.media.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, auto);
    gap: 40px;
  }
`;
const GridItem = styled.div`
  &:first-child {
    grid-column: 1/2;
    grid-row: 1/2;
    @media ${theme.media.mobile} {
      justify-self: center;
    }
  }
  &:nth-child(2) {
    grid-column: 4/5;
    grid-row: 1/2;
    @media ${theme.media.smallDesktop} {
      grid-column: 3/5;
      justify-self: center;
    }
    @media ${theme.media.tablet} {
      display: none;
    }
    @media ${theme.media.mobile} {
      display: block;
      grid-column: 1/2;
      grid-row: 3/4;
    }
  }
  &:nth-child(3) {
    grid-column: 1/2;
    grid-row: 2/3;
    padding: 68px 0 44px;
    @media ${theme.media.tablet} {
      padding: 32px 0 96px;
    }
    @media ${theme.media.mobile} {
      grid-column: 1/2;
      grid-row: 4/5;
      justify-self: center;
      padding: 0;
    }
  }
  &:nth-child(4) {
    grid-column: 1/2;
    grid-row: 3/4;
    @media ${theme.media.tablet} {
      grid-column: 4/5;
      grid-row: 1/3;
      justify-self: end;
    }
    @media ${theme.media.mobile} {
      grid-column: 1/2;
      grid-row: 2/3;
      justify-self: center;
    }
  }
  &:nth-child(5) {
    width: 100%;
    grid-column: 2/4;
    grid-row: 3/4;
    align-self: end;
    @media ${theme.media.tablet} {
      grid-column: 1/2;
      grid-row: 3/4;
    }
    @media ${theme.media.mobile} {
      grid-column: 1/2;
      grid-row: 6/7;
      justify-self: center;
      align-self: center;
    }
  }
  &:last-child {
    grid-column: 4/5;
    grid-row: 3/4;
    justify-self: end;
    align-self: end;
    @media ${theme.media.tablet} {
      grid-column: 3/5;
    }
    @media ${theme.media.mobile} {
      grid-column: 1/2;
      grid-row: 5/6;
      justify-self: center;
      align-self: center;
    }
  }
`;

const AuthorInfo = styled.small`
  font-weight: 100;
  font-size: 16px;
  line-height: 130%;
  opacity: 0.6;
`;
