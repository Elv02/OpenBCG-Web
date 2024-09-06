import React, { useState } from "react";
import "./Header.scss";

const Header: React.FC = () => {
  // Use a Record type for dropdownOpen to specify valid keys
  const [dropdownOpen, setDropdownOpen] = useState<Record<'play' | 'cards', boolean>>({
    play: false,
    cards: false
  });

  // Specify that 'menu' is a union of 'play' or 'cards'
  const handleDropdownToggle = (menu: 'play' | 'cards') => {
    setDropdownOpen({
      ...dropdownOpen,
      [menu]: !dropdownOpen[menu]
    });
  };

  return (
    <header className="header">
      <h2 className="header__title">OpenBCG</h2>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">About</li>
          <li className="header__nav-item" onClick={() => handleDropdownToggle('cards')}>
            Cards
            <ul className={`header__nav-item-dropdown ${dropdownOpen.cards ? "header__nav-item-dropdown-open" : ""}`}>
              <li className="header__nav-item-dropdown-item">Browse Available Cards</li>
              <li className="header__nav-item-dropdown-item">Create a New Card</li>
            </ul>
          </li>
          <li className="header__nav-item" onClick={() => handleDropdownToggle('play')}>
            Play
            <ul className={`header__nav-item-dropdown ${dropdownOpen.play ? "header__nav-item-dropdown-open" : ""}`}>
              <li className="header__nav-item-dropdown-item">Start a Match</li>
              <li className="header__nav-item-dropdown-item">Join a Match</li>
            </ul>
          </li>
          <li className="header__nav-item">Help</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
