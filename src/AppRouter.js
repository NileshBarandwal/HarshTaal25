import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.js";
import EventsPage from './pages/EventsPage.js';
import TeamInfo from "./pages/TeamInfo.js";
import ScrollToTop from './ScrollToTop.js';
import FormComponent from "./sections/Form.jsx";
import Timeline from "./pages/Schedule.js";

const AppRouter = () => {
    return (
        <BrowserRouter> {/* Use BrowserRouter directly */}
            {/* <ScrollToTop /> */}
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/hi" element={<h1>Hi</h1>} />
                <Route path="/team" element={<TeamInfo />} />
                <Route path="/registration" element={<FormComponent />} />
                <Route path="/timeline" element={<Timeline />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;