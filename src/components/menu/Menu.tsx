import { FC } from 'react';
import styled from 'styled-components';

type MenuPropsType = {
  menuItems: Array<string>;
};
export const Menu: FC<MenuPropsType> = (props: MenuPropsType) => {
  const { menuItems } = props;
  return (
    <ListMenu>
      {menuItems.map((i, index) => {
        return (
          <ListItem key={index}>
            <NavLink>{i}</NavLink>
          </ListItem>
        );
      })}
    </ListMenu>
  );
};

const ListMenu = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const ListItem = styled.li``;
const NavLink = styled.a`
  font-weight: 500;
`;
