import React, { useEffect, useState } from "react";

import './App.css';

import NavRefs from "./Components/Navigation/NavRefs";
import Filler from "./Components/Main/Filler";
import Header from "./Components/Header/Header";
import Home from './Components/Main/Home';
import Aside from './Components/Aside/Aside';
import About from './Components/Main/About';
import Facilities from './Components/Main/Facilities';
import Location from './Components/Main/Location';
import Contact from './Components/Main/Contact';
import Footer from './Components/Footer/Footer';
import scrollToSection from "./Components/Navigation/ScrollToSection";

function App() {

    const { homeRef, aboutRef, facilitiesRef, locationRef, contactRef } = NavRefs(); // Call the custom hooks
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        // headerHeight is to offset the scrolled to section by the fixed header height.
        const h1 = document.querySelector('h1');
        const searchContainer = document.querySelector('#search_container');
        setHeaderHeight(h1.offsetHeight + searchContainer.offsetHeight);
    }, []);

    return (
        <div className="App">
            
            <Header
                homeRef={homeRef}
                aboutRef={aboutRef}
                facilitiesRef={facilitiesRef}
                locationRef={locationRef}
                contactRef={contactRef}
                scrollToSection={(ref) => scrollToSection(ref, headerHeight)}
            />

            <Filler headerHeight={headerHeight} />
            <Home ref={homeRef} />
            <Aside />
            <About ref={aboutRef} />
            <Facilities ref={facilitiesRef} />
            <Location ref={locationRef} />
            <Contact ref={contactRef} />
            <Footer />
        </div>
    );
}

export default App;
