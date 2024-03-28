import React from 'react';
import './services.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus, faBoxArchive, faBuilding, faHouseChimney, faCar } from '@fortawesome/free-solid-svg-icons';

// Navbar
// const Navbar = () => {
//     return (
//         <div className="navbar">
//             <div className="navbar-left">
//                 <span>GateBot Services</span>
//             </div>
//             <div className="navbar-right">
//                 <div className="nav-icon">🔍</div>
//                 <div className="nav-icon">💬</div>
//                 <div className="nav-icon">👤</div>
//             </div>
//         </div>
//     );
// }

// Search Bar
// const SearchBar = () => {
//     return (
//         <div className="search-bar">
//             <input type="text" placeholder="Search..." />
//             <div className="search-icons">
//                 <span role="img" aria-label="shopping-cart">🛒</span>
//                 <span role="img" aria-label="bookmark">📚</span>
//             </div>
//         </div>
//     );
// }

// Slideshow
const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function Slideshow() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {colors.map((backgroundColor, index) => (
                    <div
                        className="slide"
                        key={index}
                        style={{ backgroundColor }}
                    ></div>
                ))}
            </div>

            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

// Trending services
const TrendingServices = () => {
    return (
        <div className="trending-services">
            <h3>Trending Services</h3>
            <div className="services-grid">
                <div className="service-item">
                    <span role="img" aria-label="icon">⚙️</span>
                    <p>Service 1</p>
                </div>
                <div className="service-item">
                    <span role="img" aria-label="icon">💻</span>
                    <p>Service 2</p>
                </div>
                <div className="service-item">
                    <span role="img" aria-label="icon">🔧</span>
                    <p>Service 3</p>
                </div>
                <div className="service-item">
                    <span role="img" aria-label="icon">📊</span>
                    <p>Service 4</p>
                </div>
            </div>
        </div>
    );
}

// Urban Company Services
const UrbanCompanyServices = () => {
    const urbanCompanyServices = [
        { name: "Plumbing", icon: "🚿" },
    <a href="/services/electrical">
    <span role="img" aria-label="Electrical">⚡</span> Electrician
    </a>,
        { name: "Carpentry", icon: "🔨" },
        { name: "Appliance Repair", icon: "🛠️" },
        { name: "Home Cleaning", icon: "🏡" },
        { name: "Pest Control", icon: "🐜" },
        { name: "Salon at Home", icon: "💇‍♀️" },
        { name: "Massage for Men", icon: "👐" },
        { name: "Massage for Women", icon: "💆‍♀️" },
        { name: "Fitness Trainer at Home", icon: "🏋️‍♂️" },
        { name: "Yoga Instructor at Home", icon: "🧘‍♂️" },
        { name: "Painting", icon: "🎨" },
        { name: "AC Service and Repair", icon: "❄️" },
        { name: "Refrigerator Repair", icon: "🍎" },
        { name: "Microwave Repair", icon: "🍲" }
    ];

    return (
        <div className="urban-company-services">
            <h3>Services by Urban Company</h3>
            <div className="services-list">
                {urbanCompanyServices.map((service, index) => (
                    <div className="service-item" key={index}>
                        <span role="img" aria-label="icon">{service.icon}</span>
                        <p>{service.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Car Services
const CarServices = () => {
    const carServices = [
        { name: "Car Wash", icon: "🚗" },
        { name: "Oil Change", icon: "⛽" },
        { name: "Tire Rotation", icon: "🔄" },
        { name: "Brake Inspection", icon: "🔧" },
        { name: "Car Detailing", icon: "🌟" }
    ];

    return (
        <div className="car-services">
            <h3>Car Services</h3>
            <div className="services-list">
                {carServices.map((service, index) => (
                    <div className="service-item" key={index}>
                        <span role="img" aria-label="icon">{service.icon}</span>
                        <p>{service.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Partner Deals
const PartnerDeals = () => {
    const partnerDeals = [
        { name: "Packers & Movers", icon: "📦" },
        { name: "Property Management", icon: "🏡" },
        { name: "Rent Agreement", icon: "📜" },
        { name: "Home Insurance", icon: "🏠" },
        { name: "Interior Design", icon: "🛋️" }
    ];

    return (
        <div className="partner-deals">
            <h3>Partner Deals</h3>
            <div className="deals-list">
                {partnerDeals.map((deal, index) => (
                    <div className="deal-item" key={index}>
                        <span role="img" aria-label="icon">{deal.icon}</span>
                        <p>{deal.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Gradient Section
const OurPromise = () => {
    const gradientItems = [
        { emoji: "🕗", text: "On-Time Delivery" },
        { emoji: "🧑‍🔧", text: "Expert Technicians" },
        { emoji: "🛠️", text: "Quality Services" },
        { emoji: "⭐", text: "Highly Rated" }
    ];

    return (
        <div className="gradient-section">
            <h3>Our Promise</h3>
            <div className="gradient-boxes">
                {gradientItems.map((item, index) => (
                    <div className="gradient-box" key={index}>
                        <span role="img" aria-label="emoji">{item.emoji}</span>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Help & Support Section
const HelpAndSupport = () => {
    return (
        <div className="help-and-support">
            <div className="support-box">
                <h3>Help & Support</h3>
                <p>Write to us or call us for any type of support</p>
                <span role="img" aria-label="chat-emoji">💬</span>
            </div>
        </div>
    );
}

export { Slideshow, TrendingServices, UrbanCompanyServices, CarServices, PartnerDeals, OurPromise, HelpAndSupport };