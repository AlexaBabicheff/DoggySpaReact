import React from 'react'
import '../../App.css'
import classes from './Header.module.css'
import logo from '../../images/spaLogo 2.svg'
import logotext from '../../images/Luxe Animal Spa.svg'
import searchBar from '../../images/search.svg'
import cartIcon from '../../images/shopping-bag.svg'
import userIcon from '../../images/user.svg'

export const Header =()=> {
  return (
    <div className={classes.headerContainer}>
      <div className={classes.headerLogo}>
        <img src={logo} alt="Logo-picture" />
        <img src={logotext} alt="Logo-text" />
      </div>
      <div className={classes.navigation}>
        <p>Home</p>
        <p>Products</p>
        <p>Spa Services</p>
        <p>Book Appointment</p>
        <p>Blog</p>
        <p>About Us</p>
        <p>Contact Us</p>
        </div>
        <div className={classes.searchBar}>
          <div><img src={searchBar} alt="Search-Icon" /></div>
          <div><img src={cartIcon} alt="Bag-Icon" /></div>
          <div><img src={userIcon} alt="User-Icon" /></div>
        </div>
      </div>
    );
  }


