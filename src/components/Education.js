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
          Education has been a transformative journey for me. Every step I took has shaped my skills, perspectives, 
          and aspirations for the future.
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
            <p>University of Technology | 2018 - 2022</p>
            <p>This degree provided me with a strong foundation in programming and software development.</p>
          </div>
        </div>

        <div className="degree-card">
          <img src={schoolImage} alt="School" className="degree-image" />
          <div className="degree-content">
            <h3>High School Diploma</h3>
            <p>High School of Excellence | 2014 - 2018</p>
            <p>Here, I developed critical thinking and problem-solving skills that I carry into my academic pursuits.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}

export default Education;
