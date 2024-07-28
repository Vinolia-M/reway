'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './NavMenu.module.css';

const NavMenu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  const toggleSubMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`${styles.menu} ${isMenuOpen ? styles.showMenu : ''}`}>
        <li
          className={`${styles.menuItem} ${activeMenu === 'apparels' ? styles.active : ''}`}
          onClick={() => toggleSubMenu('apparels')}>
          Apparels
          {activeMenu === 'apparels' && (
            <ul className={`${styles.subMenu} left-[15%!important]`}>
              <li className={styles.subMenuItem}>Men</li>
              <li className={styles.subMenuItem}>Women</li>
              <li className={styles.subMenuItem}>Kids</li>
            </ul>
          )}
        </li>
        <li
          className={`${styles.menuItem} ${activeMenu === 'shoes' ? styles.active : ''}`}
          onClick={() => toggleSubMenu('shoes')}>
          Shoes
          {activeMenu === 'shoes' && (
            <ul className={`${styles.subMenu} left-[-115%!important]`}>
              <li className={styles.subMenuItem}>Sports</li>
              <li className={styles.subMenuItem}>Casual</li>
              <li className={styles.subMenuItem}>Formal</li>
            </ul>
          )}
        </li>
        <li
          className={`${styles.menuItem} ${activeMenu === 'equipment' ? styles.active : ''}`}
          onClick={() => toggleSubMenu('equipment')}>
          Equipment
          {activeMenu === 'equipment' && (
            <ul className={`${styles.subMenu} left-[-138%!important]`}>
              <li className={styles.subMenuItem}>Fitness</li>
              <li className={styles.subMenuItem}>Outdoor</li>
              <li className={styles.subMenuItem}>Accessories</li>
            </ul>
          )}
        </li>
        <li
          className={`${styles.menuItem} ${activeMenu === 'gifts' ? styles.active : ''}`}
          onClick={() => toggleSubMenu('gifts')}>
          Gifts
          {activeMenu === 'gifts' && (
            <ul className={`${styles.subMenu} left-[-407%!important]`}>
              <li className={styles.subMenuItem}>For Him</li>
              <li className={styles.subMenuItem}>For Her</li>
              <li className={styles.subMenuItem}>For Kids</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
