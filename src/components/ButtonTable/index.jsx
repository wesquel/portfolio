import P from 'prop-types';
import * as Styled from './styles';

export const ButtonTable = ({ children, link }) => {
    return (
        <a
            target="_blank"
            href={link}
            style={{ textDecoration: 'none', color: '#303030' }}
            rel="noreferrer"
        >
            <Styled.Container>{children}</Styled.Container>
        </a>
    );
};

ButtonTable.propTypes = {
    children: P.node.isRequired,
    link: P.string.isRequired,
};
