import MainPage from "./pages/main-page/MainPage";
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
            </Routes>
        </Router>
        
    );
}