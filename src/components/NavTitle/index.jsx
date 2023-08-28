import P from 'prop-types';
import * as Styled from './styles';

export const NavTitle = ({ children }) => {
    return (
        <Styled.Container>
            <a href="/">{children}</a>
        </Styled.Container>
    );
};

NavTitle.propTypes = {
    children: P.node.isRequired,
};
