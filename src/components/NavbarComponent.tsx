import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavbarContainer = styled.nav`
  background-color: var(--primary-color);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LogoText = styled.a`
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  color: var(--primary-text-color);
  margin-right: 10px;
`;

const MenuButton = styled.button`
  display: none;
  cursor: pointer;
  color: #333;
  background: none;
  border: none;
  font-size: 16px;
  font-weight: bold;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
  }
`;

const NavItem = styled.li`
  margin-left: 10px;
  white-space: nowrap;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: var(--second-text-color);
  font-weight: bold;

  &:hover {
    color: #ff0000;
  }
`;

const NavbarComponen = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <LogoText href="/">Fiap Freelancer</LogoText>
      <MenuButton onClick={toggleMenu}>
        {isOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </MenuButton>
      <NavList isOpen={isOpen}>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default NavbarComponen;