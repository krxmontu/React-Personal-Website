import './Certificates.css';
import certificateImage from '../assets/images/certificate.png'; // Make sure this image exists
import programmingCert from '../assets/images/programming-cert.png'; // Image of a programming certificate
import designCert from '../assets/images/design-cert.png'; // Image of a design certificate

function Certificates() {
  return (
<div className="certificates-page">
      <section className="certificates-hero">
        <div className="certificates-text">
          <p className="welcome-text">MY CERTIFICATES</p>
          <h1>Certificates of <span className="highlight">Achievement</span></h1>
          <p className="description">
            These certificates represent my dedication and commitment to continuous learning and professional development.
          </p>
        </div>

        <div className="certificates-photo">
          <img src={certificateImage} alt="Certificates" className="certificates-group-pic" />
        </div>
      </section>

      <section className="certificates-grid">
        <h2 className="details-title">My Certificates</h2>
        <div className="grid-container">
          <div className="grid-item">
            <img src={programmingCert} alt="Programming Certificate" className="grid-image" />
            <div className="grid-content">
              <h3>Programming Fundamentals</h3>
              <p>Issued by: Online Academy</p>
              <p>Date: June 2023</p>
              <p>This certificate demonstrates my understanding of programming concepts and languages.</p>
            </div>
          </div>

          <div className="grid-item">
            <img src={designCert} alt="Design Certificate" className="grid-image" />
            <div className="grid-content">
              <h3>Graphic Design Masterclass</h3>
              <p>Issued by: Creative Institute</p>
              <p>Date: August 2023</p>
              <p>This certificate signifies my proficiency in graphic design and creativity.</p>
            </div>
          </div>

          {/* Add more certificates as needed */}
          {/* Example: */}
          <div className="grid-item">
            <img src={programmingCert} alt="Data Science Certificate" className="grid-image" />
            <div className="grid-content">
              <h3>Data Science Bootcamp</h3>
              <p>Issued by: Data Academy</p>
              <p>Date: September 2023</p>
              <p>This certificate reflects my skills in data analysis and machine learning.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Certificates;
