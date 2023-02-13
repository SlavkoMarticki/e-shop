import "../../assets/body.css";
import Navbar from "../../layouts/navbar/Navbar";
import Announcement from "../../layouts/announcement/Announcement";

export default function MainPage(){
    return ( 
        <>
            <Announcement />
            <Navbar />
        </> 
    );
}