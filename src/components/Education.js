import './Education.css';
import educationImage from '../assets/images/education.png'; // Make sure this image exists
import degreeImage from '../assets/images/degree.png'; // Image of a degree or certificate
import schoolImage from '../assets/images/school.png'; // Image representing school or learning

function Education() {
  return (
    <div className="education-page">
    <section className="education-hero">
      <div className="education-text">
        <p className="welcome-text">MY EDUCATION JOURNEY</p>
        <h1>Education is <span className="highlight">Empowerment</span></h1>
        <p className="description">
        I completed my 10th grade from K.B.M English School, Golaghat, and my 12th grade from Ramanujan Junior College, Nagaon. These formative years played a significant role in shaping my academic journey, providing me with a strong foundation in both academics and extracurricular activities.

        <br></br> Currently, I am in my final year of BCA at Assam Down Town University. My college life has been a blend of academic learning, project development, and participating in various tech-related activities and hackathons. The atmosphere in college has allowed me to collaborate with my peers on several exciting projects.

        </p>
      </div>

      <div className="education-photo">
        <img src={educationImage} alt="Education" className="education-group-pic" />
      </div>
    </section>

    <section className="education-details">
      <h2 className="details-title">Education Details</h2>
      <div className="degree-list">
        <div className="degree-card">
          <img src={degreeImage} alt="Degree" className="degree-image" />
          <div className="degree-content">
            <h3>Bachelor of Science in Computer Science</h3>
            <p>Assam Down Town University | 2023 - 2026</p>
            <p>This degree provided me with a strong foundation in programming and software development.</p>
          </div>
        </div>

        <div className="degree-card">
          <img src={schoolImage} alt="School" className="degree-image" />
          <div className="degree-content">
            <h3>High School Class 12th</h3>
            <p>High School of Excellence | 2020 - 2022</p>
            <p>Here, I developed critical thinking and problem-solving skills that I carry into my academic pursuits.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}

export default Education;
