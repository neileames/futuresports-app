// NavRefs.js
import { useRef } from "react";

const NavRefs = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const facilitiesRef = useRef(null);
    const locationRef = useRef(null);
    const contactRef = useRef(null);

    return { homeRef, aboutRef, facilitiesRef, locationRef, contactRef };
};

export default NavRefs;
