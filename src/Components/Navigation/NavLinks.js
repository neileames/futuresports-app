// NavLinks.js

import React from "react";

const NavLinks = ( { homeRef, aboutRef, facilitiesRef, locationRef, contactRef, scrollToSection } ) => {
    
    const handleScrollToSection = ( ref ) => {
        scrollToSection( ref );
    };

    return ( 
        <nav>
            <ul>
                {[
                    { label: 'Home', ref: homeRef },
                    { label: 'About', ref: aboutRef },
                    { label: 'Facilities', ref: facilitiesRef },
                    { label: 'Location', ref: locationRef },
                    { label: 'Contact', ref: contactRef }
                ].map(item => (
                    <li
                        key={item.label}
                        onClick={() => handleScrollToSection(item.ref)}
                        onTouchStart={() => handleScrollToSection(item.ref)}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavLinks;