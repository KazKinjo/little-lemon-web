import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import hamburger_menu from "../../assets/icon _hamburger_menu.svg"

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledContainer role="banner">
      <Link to="/">
        <img
          src={Logo}
          alt="Little Lemon Logo"
          style={{ width: "100%" }}
        />
      </Link>
      <StyledUl open={open}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="">About</Link>
        </li>
        <li>
          <Link to="">Menu</Link>
        </li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
        <li>
          <Link to="">Order Online</Link>
        </li>
        <li>
          <Link to="">Login</Link>
        </li>
      </StyledUl>
      <StyledMenuIcon onClick={() => setOpen(!open)}>
        <img src={hamburger_menu} alt="hamburger_menu" />
      </StyledMenuIcon>
    </StyledContainer>
  );
};

const StyledContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #EDEFEE;
  padding: 1.5rem 3.5rem;
`

const StyledUl = styled.ul`
  display: flex;

  li {
    padding: 0.5rem;
  }

  a {
    color: #333333;
    font-family: "Karla", sans-serif, serif;
    font-size: 1rem;
    font-weight: 500;
    &:hover{
      font-weight: bold;
    }
  }

  @media(max-width: 768px) {
    display: ${({ open }) => (open ? "row" : "none")};
    flex-direction: column;
    position: absolute;
    top: 5.5rem;
    right: 0;
    width: 100%;
    line-height: 5.2;
    text-align: center;
    background-color: rgba(51, 51, 51, 0.8);
    transition: all 1s ease-out;
    z-index: 100;

    a {
    color: #EBE5E5;
    }
  }
`

const StyledMenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`

export default Nav;