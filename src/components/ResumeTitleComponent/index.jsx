import P from 'prop-types';
import * as Styled from './styles';

export const ResumeTitleComponent = ({ children }) => {
    return <Styled.Container>{children}</Styled.Container>;
};

ResumeTitleComponent.propTypes = {
    children: P.node.isRequired,
};
