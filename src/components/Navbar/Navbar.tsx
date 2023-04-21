import { useMatches } from "react-router-dom";

import { StyledNavbar, PageName } from "./Navbar.styled";

const Navbar = () => {
  const matches = useMatches();

  return (
    <StyledNavbar>
      <PageName>
        {matches.length > 1 ? (matches[1].handle as string) : ""}
      </PageName>
    </StyledNavbar>
  );
};

export default Navbar;
