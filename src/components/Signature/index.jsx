import P from "prop-types";
import * as Styled from "./styles";

export const Signature = ({ children }) => {
  return (
    <Styled.Container>
      <p className="signature">{children}</p>
    </Styled.Container>
  );
};

Signature.propTypes = {
  children: P.node.isRequired,
};
