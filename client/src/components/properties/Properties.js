import React, { useState } from 'react';
import './properties.css';

const Properties = () => {
    return (
        <div>
            <MainContent />
        </div>
    );
};

const MainContent = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const testimonials = document.querySelectorAll('.testimonial');

    const slide = (direction) => {
        testimonials[currentTestimonial].classList.remove('active');
        if (direction === 'next') {
            setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
        } else if (direction === 'prev') {
            setCurrentTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
        }
        testimonials[currentTestimonial].classList.add('active');
    };

    // Initialize the first testimonial
    window.onload = () => {
        testimonials[0].classList.add('active');
    };

    return (
        <div className="container">
            <div className="question">Want to list a property?</div>
            <button className="post-button">Post Property</button>

            <center>
                <div className="search-container">
                    <div className="search-options">
                        <input type="radio" id="rent" name="option" className="option-input" defaultChecked />
                        <label htmlFor="rent" className="option-button">Rent</label>

                        <input type="radio" id="buy" name="option" className="option-input" />
                        <label htmlFor="buy" className="option-button">Buy</label>

                        <input type="radio" id="share" name="option" className="option-input" />
                        <label htmlFor="share" className="option-button">Share</label>
                    </div>
                    <div className="search-location">
                        <label htmlFor="location-select">Finding in</label>
                        <select id="location-select">
                            <option value="bangalore">Bangalore</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="bangalore">Bangalore</option>
                        </select>
                    </div>
                    <div className="search-bar">
                        <input type="text" placeholder="Search for localities, projects, land..." />
                    </div>
                </div>
            </center>

            <br /><br />

            <div className="property-services">
                <h2>Property Services</h2>
                <div className="services-grid">
                    <button className="service-item" aria-label="Rent Agreement">
                        <span role="img">📄</span>
                        <span>Rent Agreement</span>
                    </button>
                    <button className="service-item" aria-label="Property Management">
                        <span role="img">🏠</span>
                        <span>Property Management</span>
                    </button>
                    <button className="service-item" aria-label="Cleaning">
                        <span role="img">🧹</span>
                        <span>Cleaning</span>
                    </button>
                    <button className="service-item" aria-label="Painting">
                        <span role="img">🎨</span>
                        <span>Painting</span>
                    </button>
                    <button className="service-item" aria-label="Movers & Packers">
                        <span role="img">🚚</span>
                        <span>Movers & Packers</span>
                    </button>
                    <button className="service-item" aria-label="Pest Control">
                        <span role="img">🐛</span>
                        <span>Pest Control</span>
                    </button>
                    <button className="service-item" aria-label="Rent Pay">
                        <span role="img">💳</span>
                        <span>Rent Pay</span>
                    </button>
                    {/* Add more services as needed */}
                </div>
            </div>

            <br /><br /><br />

            <div className="testimonial-container">
                <div className="testimonial" id="testimonial1">
                    <p>"The service was fantastic! Our expectations were not only met but exceeded."</p>
                    <p className="author">- Taylor Brown</p>
                </div>
                <div className="testimonial" id="testimonial2">
                    <p>"I was thoroughly impressed by the professionalism and high-quality service provided."</p>
                    <p className="author">- Jordan Lee</p>
                </div>
                <div className="testimonial" id="testimonial3">
                    <p>"Absolutely wonderful! I would highly recommend this service to anyone."</p>
                    <p className="author">- Casey Smith</p>
                </div>
                <div className="controls">
                    <span className="control-left" onClick={() => slide('prev')}>❮</span>
                    <span className="control-right" onClick={() => slide('next')}>❯</span>
                </div>
            </div>
        </div>
    );
};

export default Properties;
