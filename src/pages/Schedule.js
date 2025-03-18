import '../styles/Schedule.css';
import HomeNav from '../components/HomeNav/HomeNav.js';

const Timeline = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/HarshTaal_2.0_timeline_cropped.jpg';
        link.download = 'HarshTaal_2.0_timeline_cropped.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='schedule-container'>
            <HomeNav />
            <h1>Schedule</h1>
            <p>Click on the image to download</p>

            <img 
                src="/HarshTaal_2.0_timeline_cropped.jpg" 
                alt='harshtal-schedule' 
                className='schedule-img'
                onClick={handleDownload}
                style={{ cursor: 'pointer' }}
            />
        </div>
    );
};

export default Timeline;