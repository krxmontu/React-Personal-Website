import './Hobbies.css';
import codingImage from '../assets/images/coding.png'; // Example hobby image
import travelImage from '../assets/images/travel.png';
import musicImage from '../assets/images/music.png';

function Hobbies() {
  return (
<div className="hobbies-page">
      <section className="hobbies-hero">
        <div className="hobbies-text">
          <p className="welcome-text">THINGS I LOVE</p>
          <h1>
            My <span className="highlight">Hobbies</span>
          </h1>
          <p className="description">
            Life is not just about work. I find joy in activities that inspire me and fuel my creativity. 
            Here are a few things I love doing when I’m not coding.
          </p>
        </div>
      </section>

      {/* Hobby Cards Section */}
      <section className="hobby-cards">
        <div className="hobby-card">
          <img src={codingImage} alt="Coding" className="hobby-image" />
          <h3>Coding</h3>
          <p>
            I love creating software solutions and bringing ideas to life through code. It’s both my passion and profession!
          </p>
        </div>

        <div className="hobby-card">
          <img src={travelImage} alt="Traveling" className="hobby-image" />
          <h3>Traveling</h3>
          <p>
            Exploring new places and cultures broadens my horizons and gives me fresh perspectives.
          </p>
        </div>

        <div className="hobby-card">
          <img src={musicImage} alt="Music" className="hobby-image" />
          <h3>Listening to Music</h3>
          <p>
            Music helps me unwind and keeps me motivated during work and relaxation.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Hobbies;
