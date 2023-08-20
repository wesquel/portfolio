import P from "prop-types";
import * as Styled from "./styles";

export const Brand = ({ brand }) => {
  return (
    <Styled.Brand>
      <div>
        <img src={brand} alt="java brand" />
      </div>
    </Styled.Brand>
  );
};

Brand.propTypes = {
  brand: P.node.isRequired,
};
