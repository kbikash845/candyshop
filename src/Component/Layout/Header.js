import React from 'react';
import classes from './Header.module.css'
import HeaderButton from './HeaderButton';

function Header() {
  return (
    <div className={classes.header}>
        <h1>Candy Shop</h1>
        <div>
            <HeaderButton/>
        </div>
    </div>
  )
}

export default Header