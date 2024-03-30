// Filler.js

import React from 'react';

const Filler = ({ headerHeight }) => {

    return (
        <div id="filler" className="section" style={{ height: `${headerHeight}px` }} >
            {/*
                This section is not displayed.
                It is rendered behind the fixed header.
                It ensures correct scrolling to the top of the other sections.
            */}
        </div>
    );
};

export default Filler;
