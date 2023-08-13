import * as Styled from "./styles";
import { NavLink } from "../NavLink";

export const NavBar = ({ links = [] }) => {
  return (
    <Styled.Container>
      <NavLink links={links} />
    </Styled.Container>
  );
};

NavBar.propTypes = {
  ...NavLink.propTypes,
};
