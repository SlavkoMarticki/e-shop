import "../../assets/announcement.css";
import phone from "../../assets/icons/phone.png";
import email from "../../assets/icons/mail.png";

export default function Announcement(){
    return (
        <div className="announcement-container">
            <div className="announcement">
                <img src={phone} alt="" />
                <p>+381 99 9999 99</p>
            </div>
            <div className="announcement">
                <img src={email} alt="" />
                <p>toolshop@gmail.com</p>
            </div>
        </div>
    );
}