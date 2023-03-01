import MainPage from "./pages/main-page/MainPage";
import Orders from "./pages/orders/Orders";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

export default function App(){
    return(
        
        <Router>
            <Routes>
                <Route path="/" element= {<MainPage />}/>
                <Route path="/orders" element= {<Orders />}/>
            </Routes>
        </Router>
        
    );
}