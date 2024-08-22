import React from 'react';
import { Button } from 'react-bootstrap';
import './About.css';

const AboutMe = () => {
    return (
        <div id="AboutMe" className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8">
                    <div className="p-4 about-container">
                        <h5 className="footer-title text-center mb-4" style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', fontSize: '1.5rem', color: '#343a40' }}>
                            S3 Restaurant
                        </h5>
                        <h6 style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', fontSize: '0.9rem', color: '#343a40' }}>Shree Sawariya Seth</h6>
                        <p className="footer-text text-center">
                            At our restaurant, every dish tells a story, crafted with love and served with passion. The ambiance, the flavors, the experience – all come together to create a culinary journey like no other. Here, we don't just serve food; we create moments that linger in your heart long after the last bite. Come hungry, leave happy, and return as family.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
