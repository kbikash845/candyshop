import React from 'react'
import classes from './Header.module.css';
import HeaderButton from './HeaderButton';

function Headers() {
  return (
    <div className={classes.headers}>
        <div>
          <h1>Candy Shop</h1>
        </div>
        <div>
            <HeaderButton/>
        </div>
    </div>
  )
}

export default Headers