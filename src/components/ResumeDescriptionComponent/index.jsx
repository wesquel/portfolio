import P from 'prop-types';
import * as Styled from './styles';

export const ResumeDescriptionComponent = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

ResumeDescriptionComponent.propTypes = {
  children: P.node.isRequired,
};
