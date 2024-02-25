import { FC } from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/Theme';
import { Logo } from '@/components/logo/Logo';
import { DesktopMenu } from './desktopMenu/DesktopMenu';

const dataMenuItems = ['About', 'Map', 'Zoos', 'Contact us', 'Designed by ©'];
export const Header: FC = () => {
  return (
    <StyledHeader>
      <Logo />
      <DesktopMenu menuItems={dataMenuItems} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  column-gap: 64px;
  align-items: center;
  width: 100%;
  height: 80px;
  padding-left: 220px;
  background: ${theme.colors.bgHeader.primaryBg};
  position: fixed;
  z-index: 10;
`;
