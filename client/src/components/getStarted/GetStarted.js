import ImageSlider from "./ImageSlider";
import "./get-started.css";


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
        height: "1000px",
        margin: "0 auto",
    };
    return (
        <div>
            <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>

            <div>
                <br></br><br></br><br></br>
                <center>
                    <button class="get-started-button">Get Started</button>
                </center>
            </div>
        </div>
    );
};

// add get started button

export default GetStarted;