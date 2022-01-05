import React, { useState } from 'react'
import '../css/Navbar.css'

import { useSelector } from 'react-redux'
import {selectUser} from '../features/userSlice'
import db, { auth } from "../firebase";
import firebase from 'firebase'
import { Avatar} from '@material-ui/core'
import LaptopIcon from '@material-ui/icons/Laptop';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ExploreIcon from '@material-ui/icons/Explore';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function Navbar() {
    const user = useSelector(selectUser);
    return (
        <>
        
        <div className="qHeader_avatar">
                            
                            <div class="dropdown">
  <input type="checkbox" id="dropdown" />

  <label class="" for="dropdown">
    <div class="dropdown__text"><Avatar
                                
                                src={user.photo}
                            /></div>

    {/* <div class="dropdown__arrow"></div> */}
  </label>

  <ul class="dropdown__items">
    <li><button onClick={() => auth.signOut()}>log out</button></li>
  </ul>
</div>

<svg>
  <filter id="goo">
    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
    <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
    <feBlend in="SourceGraphic" in2="goo" />
  </filter>
</svg>
                        </div>
        <div className = "qHeader">
            <div className = "qHeader_logo">
                <h5>YOUR SPACES</h5>
            </div>

            <div className="qHeader_icons">
                <div className="qHeader_icon">
                    <LaptopIcon  />
                    <h5>Laptops</h5>
                </div>
                <div className="qHeader_icon">
                    <SmartphoneIcon />
                    <h5>Smartphones</h5>
                    
                </div>
                <div className="qHeader_icon">
                    <ExploreIcon />
                    <h5>Technology Startup</h5>
                    
                </div>
                <div className="qHeader_icon">
                    <ExploreIcon />
                    <h5>Technology Trends</h5>
                </div>
                <div className="qHeader_icon">
                    <CalendarTodayIcon />
                    <h5>Current Events In Tecnology</h5>
                </div>
            </div>

      <div className="qHeader_rem">
        <h5>
          See all
        </h5>
        <KeyboardArrowDownIcon/>
      </div>
            
    </div>
    </>
    )
}

export default Navbar
