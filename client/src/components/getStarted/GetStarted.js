import ImageSlider from "./ImageSlider";
import "./get-started.css";
import { Link } from "react-router-dom";

const GetStarted = () => {
    const slides = [
        { url: "https://i.ibb.co/wpThZTT/img1.png" },
        { url: "https://i.ibb.co/GTFfR8Z/img2.png" },
        { url: "https://i.ibb.co/31hCN1z/img3.png" },
        { url: "https://i.ibb.co/8dSkfzV/img4.png" },
        { url: "https://i.ibb.co/gzTHY77/img5.png" },
    ];
    const containerStyles = {
        width: "500px",
        height: "900px",
        margin: "0 auto",
        padding: "0.5cm"
    };
    return (
        <div>
            <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>

            <div>
                <br></br><br></br><br></br>
                <center>
                    <Link to="getstarted" className="getstartedtxt">Get Started</Link>
                </center>
            </div>
        </div>
    );
};

// add get started button

export default GetStarted;