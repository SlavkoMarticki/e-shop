import "../../assets/footer.css";
import instagram from "../../assets/icons/instagram.png"
import facebook from "../../assets/icons/facebook.png"
import twitter from "../../assets/icons/twitter.png"
import youtube from "../../assets/icons/youtube.png"

export default function Footer(){
    return (
        <div className="footer-container">
            <div className="footer-info">
                <div className="contact">
                    <div className="header">
                        <p>Contact</p>
                    </div>
                    <div className="body">
                        <p>E-mail: toolshop@gmail.com</p>
                        <p>Phone: +381 9 9999 999</p>
                    </div>
                </div>
                <div className="shops">
                    <div className="header">
                        <p>Shops</p>
                    </div>
                    <div className="body">
                       <p>WorkCity 12A</p>
                       <p>WorkCity 114</p>
                       <p>WorkCity 1A</p>
                       <p>WorkCity 56B</p>
                    </div>
                </div>
                <div className="social-media">
                    <div className="header">
                        <p>Social media</p>
                    </div>
                    <div className="body">
                        <img src={instagram} alt="" />
                        <img src={youtube} alt="" />
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                </div>
            </div>
            <div className="developer">
                <p>© Slavko Marticki</p>
            </div>
        </div>
    );
}