import './Hobbies.css';
import codingImage from '../assets/images/coding.png'; // Example hobby image
import travelImage from '../assets/images/travel.png';
import musicImage from '../assets/images/music.png';

function Hobbies() {
  return (
<div className="hobbies-page">
      <section className="hobbies-hero">
        <div className="hobbies-text">
          <h1>
            My <span className="highlight">Hobbies</span>
          </h1>
          <p className="description">
          In my free time, I enjoy playing cricket, exploring the internet for new knowledge, and learning about investments and financial planning. These hobbies help me balance my academic and personal life, allowing me to stay active and informed.

          </p>
        </div>
      </section>

      {/* Hobby Cards Section */}
      <section className="hobby-cards">
        <div className="hobby-card">
          <img src={codingImage} alt="Coding" className="hobby-image" />
          <h3>Coding</h3>
          <p>
            I love creating software solutions and bringing ideas to life through code.
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
