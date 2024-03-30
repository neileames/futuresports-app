// Location.js

import React from 'react';

const Location = React.forwardRef((props, ref) => {

    return (
        <div ref={ref} className="section">

            <h2>Location</h2>
            <p>FutureSports is located in the south east of Melbourne at Casey Fields.</p>

            <div className="map-container">

                <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d6277.623108904113!2d145.3065494!3d-38.1213183!3m2!1i1024!2i768!4f13.1!2m1!1scasey%20fields!5e0!3m2!1sen!2sdz!4v1699229824608!5m2!1sen!2sdz&loading=async" width="600" height="450"
                    title="map" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="map-iframe">
                </iframe>

            </div>


        </div>
    );
});

export default Location;
