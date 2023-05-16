import { useState } from 'react';
import styles from './Header.module.scss';
import Logo from '../Logo';
import BurgerButton from '../BurgerButton';
import { NavList, NavItem } from '../Nav';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const {header, toggleThemeBtn} = styles;
  const { theme, toggleTheme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen(!isOpen);
  }

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <header className={header}>
      <Logo />
      <BurgerButton onClick={toggleNav} isOpen={isOpen}/>
      <NavList isOpen={isOpen}>
        <NavItem link="/about">About</NavItem>
        <NavItem link="/contact">Contact</NavItem>
        <NavItem link="/blog">Blog</NavItem>
        <NavItem link="/login">Login</NavItem>
      </NavList>
      <button className={toggleThemeBtn} onClick={handleClick}>--Toggle theme</button>
    </header>
  )
}

export default Header