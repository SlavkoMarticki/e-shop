import "./contact.css";
import map from "../../../assets/images/map.png";

export default function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-header">
                <p>Contact</p>
            </div>
            <div className="email">
                <div className="email-section">
                    <div className="email-header">
                        <p>Send us E-mail</p>
                    </div>
                    <div className="email-body">
                        <div className="email-title">
                            <p>Title</p>
                            <input type="text" />
                        </div>
                        <div className="email-message">
                            <p>Message</p>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div className="email-bottom">
                        <button>Send</button>
                    </div>
                </div>
            </div>
            <div className="map">
               <div className="map-header">
                    <p>Find us on map</p>
                    <img src={map} alt="" />
               </div>
            </div>
        </div>
    );
}