import "../../assets/body.css";
import Navbar from "../../layouts/navbar/Navbar";
import Announcement from "../../layouts/announcement/Announcement";
import { Footer } from "../../layouts/footer";
import { Home } from "./home";
import { News } from "./news";
import { Gallery } from "./gallery";
import { AboutUs } from "./about-us";
import { Contact } from "./contact";

export default function MainPage(){
    return ( 
        <>
            <Announcement />
            <Navbar />
            <Home />
            <News />
            <Gallery />
            <AboutUs />
            <Contact />
            <Footer />
        </> 
    );
}