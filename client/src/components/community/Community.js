import React from 'react';
import './community.css';

// Define your service data with emojis and links
const services = [
    { title: '🏠 Residents', desc: 'View Society Residents & Management Com...', link: '#residents' },
    { title: '👷 Daily Help', desc: 'Find Daily Helps & Service Providers', link: '#daily-help' },
    { title: "🚨 Emergency No's", desc: 'Emergency contacts for your society', link: '#emergency' },
    { title: '📖 Local Directory', desc: 'Share and find contacts from your n...', link: '#directory' },
    { title: '🛠️ Helpdesk', desc: 'Raise Complaints & Service Requests', link: '#helpdesk' },
    { title: '🏊 Amenities', desc: 'Book facilities in your society', link: '#amenities' },
    { title: '📌 Notice Board', desc: 'Important announcements and notices', link: '#notice-board' },
    { title: '📄 Documents', desc: 'Access society documents and files', link: '#documents' },
    { title: '🗳️ Elections & Surveys', desc: 'Participate in society elections and surveys', link: '#elections' },
    { title: '💬 Communications', desc: 'Stay updated with society communications', link: '#communications' }
];

const Community = () => {
    // Function to handle click event
    const handleClick = (link) => {
        // Implement your navigation logic here
        console.log(`Navigating to ${link}`);
    };

    return (
        <div className="container">
            <div className="section">
                <h2>Discover</h2>
                <div className="services">
                    {services.slice(0, 4).map((service, index) => (
                        <button key={index} className="service-card" onClick={() => handleClick(service.link)}>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </button>
                    ))}
                </div>
            </div>

            <div className="section">
                <h2>Engage</h2>
                <div className="services">
                    {services.slice(4).map((service, index) => (
                        <button key={index} className="service-card" onClick={() => handleClick(service.link)}>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Community;
