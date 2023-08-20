import P from "prop-types";
import * as Styled from "./styles";

export const Presentation = ({ children }) => {
  return (
    <>
      <Styled.Title>Olá 👋,</Styled.Title>
      <Styled.Container>{children}</Styled.Container>
    </>
  );
};

Presentation.propTypes = {
  children: P.node.isRequired,
};
