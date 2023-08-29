import P from 'prop-types';
import * as Styled from './styles';

export const TitleComponent = ({ children }) => {
    return (
        <Styled.Container>
            <h2 className="title">{children}</h2>
        </Styled.Container>
    );
};

TitleComponent.propTypes = {
    children: P.node.isRequired,
};
