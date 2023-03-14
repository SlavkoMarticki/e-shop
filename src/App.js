import { MainPage, Orders } from './pages'; 

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