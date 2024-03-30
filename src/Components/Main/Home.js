// Home.js

import React from 'react';
import crowd from '../../assets/images/crowd.jpg';

const Home = React.forwardRef((props, ref) => {

    return (
        <div ref={ref} className="section">
            <figure className="img_crowd_container">
                <img src={crowd} alt="Crowd in grandstand is standing and cheering" />
            </figure>
        </div>
    );
});

export default Home;
