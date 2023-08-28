import * as Styled from './styles';
import { NavLink } from '../NavLink';
import { NavTitle } from '../NavTitle';

export const NavBar = ({ links = [] }) => {
    return (
        <Styled.Bar>
            <NavTitle>Weslley Carvalho</NavTitle>
            <NavLink links={links} />
        </Styled.Bar>
    );
};

NavBar.propTypes = {
    ...NavLink.propTypes,
};
