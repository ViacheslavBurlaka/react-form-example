import React, {useEffect, useState} from 'react';
import Link from "../../elements/Link/Link";
import Logo from "../../elements/Logo/Logo";
import Button from "../../elements/Button/Button";
import './Header.scss';

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop ||
      document.documentElement.scrollTop;
    winScroll > 0 ? setSticky(true) : setSticky(false)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <header className={`Header ${isSticky ? 'Header--sticky' : ''}`}>
      <Logo/>
      <nav className="Header__nav">
        <Link href={'/'} text={'How it works?'}/>
        <Link href={'/'} text={'Browse'}/>
        <Link href={'/'} text={'Research'}/>
        <Link href={'/'} text={'About'}/>
        <Link href={'/'} text={'Contacts'}/>
        <Button text={'Sign Up'}/>
      </nav>
    </header>
  );
};

export default Header;
