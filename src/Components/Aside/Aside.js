import React, { useEffect } from 'react';

import happyhealthy from '../../assets/images/happyhealthy.jpg'
import runner from '../../assets/images/runner.jpg'
import soccer from '../../assets/images/soccer.jpg'
import tennis from '../../assets/images/tennis.jpg'
import wellhungsportswear from '../../assets/images/wellhungsportswear.jpg'


const Aside = () => {
    useEffect(() => {
        // Get all li-container divs
        const liContainers = document.querySelectorAll('.li-container');

        // Set the initial position
        let position = 0;

        // Show the initial div
        liContainers[position].style.display = 'block';

        // Get the next and previous buttons
        const nextButton = document.querySelector('.next');
        const prevButton = document.querySelector('.prev');

        // Define event handler functions
        const nextButtonClickHandler = () => {
            // Hide the current div
            liContainers[position].style.display = 'none';

            // Move to the next position
            position = (position + 1) % liContainers.length;

            // Show the next div
            liContainers[position].style.display = 'block';
        };

        const prevButtonClickHandler = () => {
            // Hide the current div
            liContainers[position].style.display = 'none';

            // Move to the previous position
            position = (position - 1 + liContainers.length) % liContainers.length;

            // Show the previous div
            liContainers[position].style.display = 'block';
        };

        // Add event listeners
        nextButton.addEventListener('click', nextButtonClickHandler);
        prevButton.addEventListener('click', prevButtonClickHandler);

        // Remove event listeners on cleanup
        return () => {
            nextButton.removeEventListener('click', nextButtonClickHandler);
            prevButton.removeEventListener('click', prevButtonClickHandler);
        };
    }, []);

    return (
        <div className='aside'>
            <section id="carousel" className="carousel">
                <h3 className="red"><strong>Player Profiles</strong></h3>
                <button className="arrow prev">⇦</button>

                <div className="gallery">

                    <div id="profile1" className="li-container">
                        <section className="data">
                            <figure>
                                <img src={runner} alt="runner Tiferi Ashenafi" />
                            </figure>

                            <table>
                            <thead>
                            <tr>
                                <th className="red" colSpan="2" scope="col">
                                    <strong>Tiferi Ashenafi</strong>
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Sport:</td>
                                    <td>Distance Running</td>
                                </tr>
                                <tr>
                                    <td>Age:</td>
                                    <td>25</td>
                                </tr>
                                <tr>
                                    <td>Height:</td>
                                    <td>178 cm</td>
                                </tr>
                                <tr>
                                    <td>Weight:</td>
                                    <td>67 kg</td>
                                </tr>
                                </tbody>
                            </table>

                        </section>

                        <section className="article">
                            <article>

                                <p>FutureSports welcomes Tiferi Ashenafi.</p>
                                <p>Tiferi fled his home country Ethiopia where he tragically lost his family in the <a href="https://en.wikipedia.org/wiki/Tigray_War" target="_blank" rel="noreferrer">Tigray civil war</a>.</p>
                                <p>We are proud to have supported Tiferi in his recent successful visa application for refugee status in Australia.</p>
                                <p>His unwavering determination to succeed reflects his appreciation of the opportunity he has grabbed with both hands.</p>
                                <p>Tiferi has a passion for advocating for human rights.</p>
                                <p>"I am grateful for the opportunity to live in Australia and to train to be a professional marathon runner. I will never forget the sacrifices that my family made for me. I will use my platform as an athlete to help other refugees and to inspire them to never give up on their dreams."</p>
                                <p>When not chasing his dream to be the best he can be, Tiferi relaxes by reading and going to the beach.</p>

                            </article> 
                        </section>
                    </div>
                    <div id="profile2" className="li-container">
                        <section className="data">
                            <figure>
                                <img src={tennis} alt="tennis player Jenny Sullivan" />
                            </figure>

                            <table>
                                <thead>
                            <tr>
                                <th className="red" colSpan="2" scope="col">
                                    <strong>Jenny Sullivan</strong>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                <tr>
                                    <td>Sport:</td>
                                    <td>Tennis</td>
                                </tr>
                                <tr>
                                    <td>Age:</td>
                                    <td>17</td>
                                </tr>
                                <tr>
                                    <td>Height:</td>
                                    <td>175 cm</td>
                                </tr>
                                <tr>
                                    <td>Weight:</td>
                                    <td>60 kg</td>
                                </tr>
                                </tbody>
                            </table>
                        </section>

                        <section className="article">
                            <article>

                                <p>At the age of 17, Jenny Sullivan is aiming high in the tennis world.</p>
                                <p>Her pleasant smile and genial nature off court give way to a fierce concentration and determination when she crosses that white line.</p>
                                <p>Jenny is developing a strong serve and an aggressive style from the baseline.</p>
                                <p>She spends many hours in the gym building her core strength and endurance.</p>
                                <p>Jenny will be representing FutureSports at the upcoming State Championship.</p>
                                <p>Jenny enjoys time with family and friends, playing video games, and loves the travel opportunities tennis is providing her.</p>

                            </article>
                        </section>
                    </div>
                    <div id="profile3" className="li-container">
                        <section className="data">
                            <figure>
                                <img src={soccer} alt="runner Stephan Georgiev" />
                            </figure>


                            <table>
                                <thead>
                            <tr>
                                <th className="red" colSpan="2" scope="col">
                                        <strong>Stephan Georgiev</strong>
                                    </th>
                            </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Sport:</td>
                                    <td>Soccer</td>
                                </tr>
                                <tr>
                                    <td>Age:</td>
                                    <td>26</td>
                                </tr>
                                <tr>
                                    <td>Height:</td>
                                    <td>180 cm</td>
                                </tr>
                                <tr>
                                    <td>Weight:</td>
                                    <td>79 kg</td>
                                </tr>
                                </tbody>
                            </table>
                    
                        </section>

                        <section className="article">
                            <article>

                                <p>It came as no surprise when Stephan Georgiev was appointed captain of the soccer (or as he likes to call it 'football') team.</p>
                                <p>His appointment recognises his ability as a natural leader on and off the field.</p>
                                <p>His parents migrated to Australia when Stephan was 5 years old.  He has followed in his father’s footsteps pursuing a career in the round ball game.</p>
                                <p>Stephan is renowned as a powerful and athletic forward with a great first touch and a keen eye for goal.</p>
                                <p>
                                    Away from the game, Stephan maintains his strong family ties.
                                    He plays his guitar, which is always on tour with him.
                                </p>

                            </article>
                        </section>

                    </div >

                </div >

                <button className="arrow next">⇨</button>
            </section>

            <h3 className="red"><strong>We thank our proud sponsors</strong></h3>
            <section className="sponsors">

                <figure className="sponsor-item">
                    <img src={wellhungsportswear} alt="sponsor wellhung sportswear" />
                </figure>
                <figure className="sponsor-item">
                    <img src={happyhealthy} alt="sponsor happy healthy" />
                </figure>

            </section>
        </div>
    );
};

export default Aside;