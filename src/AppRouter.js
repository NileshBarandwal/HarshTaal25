import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import EventsPage from './pages/EventsPage';
import TeamInfo from "./pages/TeamInfo";
import ScrollToTop from './ScrollToTop';

const AppRouter = () => {
    return (
        <Router> {/* Correctly using BrowserRouter */}
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/hi" element={<h1>Hi</h1>} /> {/* This will work now */}
                <Route path='/team' element={<TeamInfo />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;