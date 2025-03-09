import '../styles/Schedule.css';
import HomeNav from '../components/HomeNav/HomeNav.js';

const Timeline = () => {
    return (
        <div className='schedule-container'>
            <HomeNav />
            <h1>Schedule</h1>
            <img src="/HarshTaal_2.0_timeline_cropped.jpg" alt='harshtal-schedule' className='schedule-img'></img>
        </div>
    )
};

export default Timeline;