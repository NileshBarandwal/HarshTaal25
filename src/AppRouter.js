import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.js";
import EventsPage from './pages/EventsPage.js';
import TeamInfo from "./pages/TeamInfo.js";
import ScrollToTop from './ScrollToTop.js';

const AppRouter = () => {
    return (
        <BrowserRouter> {/* Use BrowserRouter directly */}
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/hi" element={<h1>Hi</h1>} />
                <Route path="/team" element={<TeamInfo />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;