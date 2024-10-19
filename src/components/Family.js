import './Family.css';
import familyPhoto from '../assets/images/family.png'; // Example family group photo
import fatherImage from '../assets/images/father.png';
import motherImage from '../assets/images/mother.png';
import siblingImage from '../assets/images/sibling.png';

function Family() {
  return (
<div className="family-page">
      <section className="family-hero">
        <div className="family-text">
          <p className="welcome-text">MEET MY FAMILY</p>
          <h1>
            My <span className="highlight">Family</span>
          </h1>
          <p className="description">
            Family is my pillar of support and inspiration. They’ve shaped me into the person I am today, 
            and I cherish every moment I spend with them.
          </p>
        </div>

        {/* Family Group Photo */}
        <div className="family-photo">
          <img src={familyPhoto} alt="Family Group" className="family-group-pic" />
        </div>
      </section>

      {/* Individual Family Members Section */}
      <section className="family-members">
        <div className="member-card">
          <img src={fatherImage} alt="Father" className="member-image" />
          <h3>Father</h3>
          <p>
            My father is my biggest role model, guiding me through every step of life with wisdom and strength.
          </p>
        </div>

        <div className="member-card">
          <img src={motherImage} alt="Mother" className="member-image" />
          <h3>Mother</h3>
          <p>
            My mother is the heart of our family. She brings warmth, love, and balance to everything we do.
          </p>
        </div>

        <div className="member-card">
          <img src={siblingImage} alt="Sibling" className="member-image" />
          <h3>Sibling</h3>
          <p>
            I share a special bond with my sibling, who has been my best friend and confidant throughout life.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Family;
