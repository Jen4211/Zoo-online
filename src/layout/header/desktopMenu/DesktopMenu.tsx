import { FC } from 'react';
import styled from 'styled-components';
import { Menu } from '../../../components/menu/Menu';

type DesktopMenuPropsType = {
  menuItems: string[];
};
export const DesktopMenu: FC<DesktopMenuPropsType> = (props: DesktopMenuPropsType) => {
  return (
    <StyledDesktopMenu>
      <Menu menuItems={props.menuItems} />
    </StyledDesktopMenu>
  );
};

const StyledDesktopMenu = styled.nav``;
