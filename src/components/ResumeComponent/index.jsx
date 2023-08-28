import P from 'prop-types';
import * as Styled from './styles';

export const ResumeComponent = ({ children, title, italic = false }) => {
  return (
    <Styled.Container italic={italic}>
      <h2>{title}</h2>
      {children}
    </Styled.Container>
  );
};

ResumeComponent.propTypes = {
  children: P.node.isRequired,
  title: P.string.isRequired,
  italic: P.string,
};
