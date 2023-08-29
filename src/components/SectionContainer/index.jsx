import P from 'prop-types';
import * as Styled from './styles';

export const SectionContainer = ({ children, centered = false }) => {
    return (
        <Styled.Container>
            {centered ? (
                <div className="centeredText">{children}</div>
            ) : (
                <div>{children}</div>
            )}
        </Styled.Container>
    );
};

SectionContainer.propTypes = {
    children: P.node.isRequired,
    centered: P.bool.isRequired,
};
