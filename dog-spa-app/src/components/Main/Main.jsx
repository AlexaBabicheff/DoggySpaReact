import React from 'react';
import '../../App.css';
import classes from './Main.module.css'
import mainBanner from '../../images/banner1.svg'

export const Main =()=> {
    return (
        <>
        <div className={classes.main}>
            <div className={classes.bannerTextes}>
                <div>
                    <p><h1>Your dog running amok in the dirt?</h1></p>
                </div>
                <div>
                    <p><h3>Book your doggy spa day!</h3></p>
                </div>
                <div className={classes.buttonBook}>
                    <button>Book Appointment</button>
                </div>
            </div>
            <div className={classes.dogFace}>
            </div>
        </div>
        </>
    );
  }