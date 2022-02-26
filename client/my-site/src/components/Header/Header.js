import React from 'react';
import { Link } from 'react-router-dom';

import style from './Header.module.css';

const Header = () => {
  return (
    <div>
      <div className={style.header}>
        <div className={style.headerSection}>
          <div>
            <Link className={style.headerLogo} to={'/'}>Game</Link>
        </div>
          <div className={style.headerItem}>
            <Link className={style.text} to={'/news'}>News</Link>
          </div>
          <div className={style.headerItem}>
            <a className={style.text} href="#">Events</a>
          </div>
          <div className={style.headerItem}>
            <a className={style.text} href="#">Our Top</a>
          </div>
          <div className={style.headerItem}>
            <a className={style.text} href="#">Community</a>
          </div>
          <div className={style.headerItem}>
            <a className={style.text} href="#">Account</a>
          </div>
        </div>
        <div className={style.headerSection}>
          <div className={style.headerItem}>
            <a className={style.text} href="#">Settings</a>
          </div>
          <div className={style.headerItem}>
            <a className={style.text} href="#">Log In</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
