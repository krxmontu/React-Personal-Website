import './Home.css';
import myProfilePic from '../assets/images/profile.png'; // Make sure the profile image is available

function Home() {
  return (
    <div className="home">

      <section className="hero">
        <div className="hero-text">
          <p className="welcome-text">WELCOME TO MY WORLD</p>
          <h1>Hi, I'm <span className="highlight">Jone Lee</span></h1>
          <h2>a <span className="profession">Developer</span>.</h2>
          <p className="description">
            I use animation as a third dimension by which to simplify experiences and guiding through each interaction.
            I’m not adding motion just to spruce things up, but doing it in ways that make sense.
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
