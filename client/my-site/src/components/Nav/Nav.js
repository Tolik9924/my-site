import React from 'react';

import style from './Nav.module.css';

const Nav = () => {
  return(
    <div>
      <div className={style.profileInfo}>
        <div className={style.profileSection}>
          <a href='#'>My page</a>
        </div>
        <div className={style.profileSection}>
          <a href='#'>Communities</a>
        </div>
        <div className={style.profileSection}>
          <a href='#'>Messages</a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
