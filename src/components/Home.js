import './Home.css';
import myProfilePic from '../assets/images/profile.png'; // Make sure the profile image is available

function Home() {
  return (
    <div className="home">

      <section className="hero">
        <div className="hero-text">
          <p className="welcome-text">WELCOME TO MY WORLD</p>
          <h1>Hi, I'm <span className="highlight">Montu Kumar</span></h1>
          <h2>a <span className="profession">Coding Enthusiast</span>.</h2>
          <p className="description">
            I am a coding enthusiast who thrives on turning complex challenges into innovative solutions, constantly 
            pushing myself to create impactful, efficient, and scalable technology through my love for programming.
          </p>

        </div>

        {/* Profile Picture */}
        <div className="hero-image">
          <img src={myProfilePic} alt="Profile" className="profile-pic" />
        </div>
      </section>
    </div>
  );
}

export default Home;
