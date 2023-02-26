import "./aboutUs.css";

export default function AboutUs(){
    return (
        <div className="about-us-container">
            <div className="about-us-header">
                <p>About us</p>
            </div>
            <div className="grid-container">
                <div class="company-details">
                    <div className="title">
                        <p>Compnay details</p>
                    </div>
                    <div className="informations">
                        <div className="information">
                            <p className="info-title">Name:</p>
                            <p className="info-value">WorkShopSM</p>
                        </div>
                        <div className="information">
                            <p className="info-title">Address:</p>
                            <p className="info-value">WorkStreet12</p>
                        </div>
                        <div className="information">
                            <p className="info-title">Found:</p>
                            <p className="info-value">2012</p>
                        </div>
                          <div className="information">
                            <p className="info-title">Employee:</p>
                            <p className="info-value">34</p>
                        </div>
                    </div>
                </div>
                <div class="our-story">
                    <div className="title">
                        <p>Our story</p>
                    </div>
                    <div className="story-text">
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat quam aut illum porro ea impedit fugit nam. Exercitationem vitae et est deleniti beatae sequi corporis nostrum molestias repellendus deserunt?</li>
                        </ul>
                    </div>
                </div>
                <div class="our-goals">
                    <div className="title">
                        <p>Goals</p>
                    </div>
                </div>
              
                <div class="motto">
                    <div className="title">
                        <p>Motto</p>
                    </div>
                </div>
            </div>
        </div>
    );
}