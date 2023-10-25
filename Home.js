import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Card, Button, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <div className="home" style={{ backgroundColor: 'black' }}>
                <div><h1 style={{ color: 'white' }}>AppFlix</h1></div>
                <div style={{ color: 'white' }}>
                    <h2>Bienvenue sur notre application de streaming de films. Découvrez une vaste collection de films classiques et contemporains.</h2>
                </div>
                <div><img src="/assets/images/accueil.jpg" style={{ width: '30rem' }}></img></div>

            </div>
            <div>
                <footer>
                    <p>Contactez-nous : contact@appfilms.com</p>
                </footer>
            </div>
        </div>
    );
};

export default Home;
