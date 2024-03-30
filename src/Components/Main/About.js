// About.js

import React from 'react';

const About = React.forwardRef((props, ref) => {

    return (
        <div ref={ref} className="section">
            <h2>About</h2>
            <p>At FutureSports, we believe that sport has the power to transform lives.</p>

            <p>We have a proud history, providing athletes the opportunity to achieve their full potential.</p>

            <h3>Our Values</h3>

            <p>We create a positive and supportive environment based on our core values.</p>

            <article>
                <p><strong>Integrity:</strong> Honesty and fairness in all that we do.</p>
                <p><strong>Respect:</strong> For all, regardless of background or ability.</p>
                <p><strong>Excellence:</strong> In coaching, training, facilities and administration.</p>
                <p><strong>Community:</strong> Bringing people together to build community.</p>
                <p><strong>Diversity:</strong> We are committed to embracing diversity and inclusion.</p>
                </article>

        </div>
    );
});

export default About;
