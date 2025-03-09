import { useNavigate } from "react-router-dom";
import "../Header/Header.css";

const HomeNav = () => {

  const navigate = useNavigate();

  const handleMainNav = () => {
    navigate('/');
  }

  return (
    <header style={{
      backgroundColor: "transparent"
    }}>
      <div
        className="logo-container"
        onClick={handleMainNav}
      >
        <img
          className="logo"
          src="../../../images/iitdh_logo.png"
          alt="Logo 1"
        />
        <img
          className="logo2"
          src="/images/Harshtal_logo_noblack.png"
          alt="Logo 2"
        />
      </div>
    </header>
  );
};

export default HomeNav;
