import { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import { CSSProperties } from "styled-components";

import StyledMenu from "./Menu.styled";
import Social from "../Social";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";
import { theme } from "../../theme";

const getNavLinkStyles = ({
  isActive,
}: {
  isActive: boolean;
}): CSSProperties => ({
  fontSize: "1.5rem",
  textTransform: "uppercase",
  padding: "1rem 0",
  fontWeight: "bold",
  letterSpacing: "0.5rem",
  textDecoration: "none",
  transition: "color 0.3s linear",
  textAlign: "center",
  color: isActive ? theme.accent : theme.secondary,
});

const merchandiseShopURL = "https://shop.vermintide.band";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ open, setOpen }: Props) => {
  const handleMenuItemClick = () => setOpen(false);

  return (
    <StyledMenu open={open}>
      <NavLink to="/" onClick={handleMenuItemClick} style={getNavLinkStyles}>
        Home
      </NavLink>

      <NavLink
        to="/sounds"
        onClick={handleMenuItemClick}
        style={getNavLinkStyles}
      >
        Sounds
      </NavLink>

      <NavLink
        to="/words"
        onClick={handleMenuItemClick}
        style={getNavLinkStyles}
      >
        Words
      </NavLink>

      <NavLink
        to="/visuals"
        onClick={handleMenuItemClick}
        style={getNavLinkStyles}
      >
        Visuals
      </NavLink>

      <NavLink
        to="/events"
        onClick={handleMenuItemClick}
        style={getNavLinkStyles}
      >
        Events
      </NavLink>

      <NavLink to={merchandiseShopURL} target="_blank" style={getNavLinkStyles}>
        <div style={{ display: "flex", alignItems: "baseLine" }}>
          <span style={{ marginRight: 5 }}>Shop</span>
          <ExternalLinkIcon fill="white" />
        </div>
      </NavLink>

      <Social variant="light" iconSize={30} />
    </StyledMenu>
  );
};

export default Menu;
