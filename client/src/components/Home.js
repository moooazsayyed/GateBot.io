import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBoxArchive, faBuilding, faHouseChimney, faCar } from '@fortawesome/free-solid-svg-icons';
import './style.css'; // Import the CSS file

export default function Home() {
  return (
    <div>
      <div className="navbar">
        <div className="container">
          <div className="Wingdetails">
            <div className="membership">
              <p>Free</p>
            </div>
            <div className="flat">
              <p>A -101</p>
            </div>
          </div>
          <div className="icon">
            {/* Use Link instead of button for navigation */}
            <Link to="#"><FontAwesomeIcon icon={faPlus} style={{ color: '#000000' }} /></Link>
          </div>
          <div className="icon">
            {/* Use Link instead of button for navigation */}
            <Link to="#"><FontAwesomeIcon icon={faBoxArchive} style={{ color: '#000000' }} /></Link>
          </div>
          <div className="icon">
            {/* Use Link instead of button for navigation */}
            <Link to="#"><FontAwesomeIcon icon={faBuilding} style={{ color: '#000000' }} /></Link>
          </div>
          <div className="account">
            <img src="https://preview.redd.it/htd1cssoujc51.png?auto=webp&s=ea7a4436e56a4e9e5da43549b7bb90aefd842195" alt="" />
          </div>
        </div>
      </div>

      <div className="main">
            <div className="adcontainer">
                <div className="ad"><img src="https://pbs.twimg.com/media/EEBWgoGU8AgTGJT.jpg" alt="" srcSet="" /></div>
                <div className="ad"><img src="https://etimg.etb2bimg.com/photo/90936610.cms" alt="" srcSet="" /></div>
            </div>

            <div className="approvelcontainer">
                <div className="approvelshortcut">
                    <div className="quicklinks">
                        <div className="quickbox">
                            <div className="quickicon"><a href="#"><i className="fa-regular fa-message"></i></a></div>
                            <p>Ask Society</p>
                        </div>

                        <div className="quickbox">
                            <div className="quickicon"><a href="#"><i className="fa-regular fa-message"></i></a></div>
                            <p>Ask Society</p>
                        </div>

                        <div className="quickbox">
                            <div className="quickicon"><a href="#"><i className="fa-regular fa-message"></i></a></div>
                            <p>Ask Society</p>
                        </div>
                    </div>
                </div>
                <div className="viewall"><img src="Screenshot_2024-03-05-20-59-40-98_cec0ff1a8d35b2704de9ad34b9ffd42e.jpg" alt="" srcSet="" /></div>
            </div>

            <div className="quicklinks">
                <div className="iconbox">
                    <div className="serviceicon"><a href="#"><i className="fa-regular fa-message"></i></a></div>
                    <p>Ask Society</p>
                </div>

                <div className="iconbox">
                    <div className="serviceicon"><a href="#"><i className="fa-regular fa-credit-card"></i></a></div>
                    <p>Payments</p>
                </div>

                <div className="iconbox">
                    <div className="serviceicon"><a href="#"><img src="https://w7.pngwing.com/pngs/808/880/png-transparent-amazon-com-amazon-echo-retail-amazon-prime-sales-cloud-computing-miscellaneous-text-retail.png" alt="" srcSet="" /></a></div>
                    <p>Grocery</p>
                </div>

                <div className="iconbox">
                    <div className="serviceicon"><a href="#"><i className="fa-brands fa-hornbill"></i></a></div>
                    <p>Raise Alert</p>
                </div>
            </div>

            <div className="msgcontainer">
                <div className="msgtop-bar">
                    <div className="msgprofile">
                        <img src="https://preview.redd.it/htd1cssoujc51.png?auto=webp&s=ea7a4436e56a4e9e5da43549b7bb90aefd842195" alt="Profile Icon" />
                        <div className="profile-info">
                            <span className="name">Your Name</span>
                            <span className="flat6no">Flat6 No</span>
                        </div>
                    </div>
                </div>
                <div className="main-content">
                    <h5>Is there anyone who has a contact of milk delivery boy please share</h5>
                </div>
            </div>

            <div className="msgcontainer">
                <div className="msgtop-bar">
                    <div className="msgprofile">
                        <img src="https://preview.redd.it/htd1cssoujc51.png?auto=webp&s=ea7a4436e56a4e9e5da43549b7bb90aefd842195" alt="Profile Icon" />
                        <div className="profile-info">
                            <span className="name">Your Name</span>
                            <span className="flat6no">Flat6 No</span>
                        </div>
                    </div>
                </div>
                <div className="main-content">
                    <h5>Is there anyone who has a contact of milk delivery boy please share</h5>
                </div>
            </div>

            <div className="plus-icon">
                <i className="fas fa-plus"></i>
            </div>
        </div>

      <div className="footer">
        <div className="container">
          <div className="icon">
            {/* Use Link instead of button for navigation */}
            <Link to="#"><FontAwesomeIcon icon={faBoxArchive} style={{ color: '#000000' }}/></Link>
            <span>Social</span>
          </div>
          <div className="icon">
            {/* Use Link instead of button for navigation */}
            <Link to="#"><FontAwesomeIcon icon={faBuilding} style={{ color: '#000000' }}/></Link>
            <span>Community</span>
          </div>
          <div className="icon">
            {/* Use Link instead of button for navigation */}
            <Link to="#"><FontAwesomeIcon icon={faHouseChimney} style={{ color: '#000000' }}/></Link>
            <span>Homes</span>
          </div>
          <div className="icon">
            {/* Use Link instead of button for navigation */}
            <Link to="#"><FontAwesomeIcon icon={faCar} style={{ color: '#000000' }} /></Link>
            <span>Buy & Sell</span>
          </div>
          <div className="icon">
            {/* Use Link instead of button for navigation */}
            <Link to="#"><FontAwesomeIcon icon={faPlus} style={{ color: '#000000' }} /></Link>
            <span>Services</span>
          </div>
        </div>
      </div>
    </div>
  );
}