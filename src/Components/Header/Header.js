// Header.js

import React, { useEffect, useRef } from 'react';

import NavLinks from "../Navigation/NavLinks"; // Import the custom hook
import Search from "../Search/Search";
import logo from '../../assets/images/logo.png';

const Header = ({ homeRef, aboutRef, facilitiesRef, locationRef, contactRef, scrollToSection }) => {

    const hamburgerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (hamburgerRef.current && !hamburgerRef.current.contains(event.target)) {
                const hamburgerCheckbox = document.getElementById('hamburgerCheckbox');
                if (hamburgerCheckbox) {
                    hamburgerCheckbox.checked = false;
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header>
            <a href="index.html"> <img id="logo" src={logo} alt="Future Sports company logo" /></a>
            <h1 className="no-wrap"><span className="red">Future</span> <span className="blue">Sports</span></h1>

            <Search />
            {/* hamburger for small screen menu drop down */}
            <label htmlFor="hamburgerCheckbox" id="hamburger_image" ref={hamburgerRef}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </label>
            <input type="checkbox" id="hamburgerCheckbox" />

            
                <NavLinks
                    homeRef={homeRef}
                    aboutRef={aboutRef}
                    facilitiesRef={facilitiesRef}
                    locationRef={locationRef}
                    contactRef={contactRef}
                    scrollToSection={scrollToSection}
                />
            
       
        </header>
    );
};


export default Header;
