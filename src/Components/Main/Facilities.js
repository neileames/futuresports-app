// Facilities.js

import React from 'react';
import gym from '../../assets/videos/gym-facility.mp4'

const Facilities = React.forwardRef((props, ref) => {

        return (
            <div ref={ref} className="section">
                <h2>Facilities</h2>
                <p>Our world-class facilities include:</p>

                <ul className="list">
                    <li>Fitness Centre, Gymnasium</li>
                    <li>Fields and Stadium</li>
                    <li>Swimming Pools</li>
                    <li>Sports Medicine and Rehabilitation Centre</li>
                </ul>

                <video width="320" height="240" muted controls>
                    <source src={gym} />
                    Your browser does not support the video tag.
                </video>

            </div>
        );
    });

export default Facilities;
