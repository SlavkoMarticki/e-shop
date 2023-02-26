import "./gallery.css";
import tool1 from "../../../assets/images/tool1.jpg";
import tool2 from "../../../assets/images/tool2.jpg";
import tool3 from "../../../assets/images/tool3.jpg";
export default function Gallery(){
    return(
        <div className="gallery-container">
            <div className="gallery-header">
                <p>Gallery</p>
            </div>
            <div className="images-holder">
                <img src={tool1} alt="" />
                <img src={tool2} alt="" />
                <img src={tool3} alt="" />
            </div>
        </div>
    );
}