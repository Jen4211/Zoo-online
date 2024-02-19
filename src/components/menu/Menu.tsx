import {FC} from 'react';
import styled from "styled-components";

type MenuPropsType = {
    menuItems: Array<string>
}
export const Menu: FC<MenuPropsType> = (props: MenuPropsType) => {
    return (
        <ListMenu>
            {props.menuItems.map((i, index) => {
                return (
                    <ListItem key={index}>
                        <NavLink key={index}>{i}</NavLink>
                    </ListItem>
                )
            })}
        </ListMenu>
    );
};


const ListMenu = styled.ul`
  display: flex;
  column-gap: 48px;
`
const ListItem = styled.li`

`
const NavLink = styled.a`
font-weight: 500;
`