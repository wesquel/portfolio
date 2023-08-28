import P from 'prop-types';
import * as Styled from './styles';

export const Presentation = ({ children }) => {
  return (
    <Styled.Container>
      <Styled.Title>Olá 👋</Styled.Title>
      <Styled.Presentation>{children}</Styled.Presentation>
    </Styled.Container>
  );
};

Presentation.propTypes = {
  children: P.node.isRequired,
};
