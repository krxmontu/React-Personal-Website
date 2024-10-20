import './Contributions.css';
import contributionImage from '../assets/images/contribution.png'; // Make sure this image exists
import communityService from '../assets/images/community-service.png'; // Image for community service
import volunteering from '../assets/images/volunteering.png'; // Image for volunteering
import fundraising from '../assets/images/fundraising.png'; // Image for fundraising
import helping from '../assets/images/helping.png'; // Image for helping

function Contributions() {
  return (
    <div className="contributions-page">
      <section className="contributions-hero">
        <div className="contributions-text">
          <p className="welcome-text">MY CONTRIBUTIONS</p>
          <h1>Contributions to <span className="highlight">Society</span></h1>
          <p className="description">
            I believe in giving back to the community. Here are some of my contributions towards making a positive impact.
          </p>
        </div>

        <div className="contributions-photo">
          <img src={contributionImage} alt="Contributions" className="contributions-group-pic" />
        </div>
      </section>

      <section className="contributions-grid">
        <h2 className="details-title">My Contributions</h2>
        <div className="cards-container">
          <div className="card">
            <img src={communityService} alt="Community Service" className="card-image" />
            <div className="card-content">
              <h3>Community Service</h3>
              <p>Description: Participated in various community service projects, helping to clean parks and organize local events.</p>
              <p>Date: 2022 - Present</p>
            </div>
          </div>

          <div className="card">
            <img src={volunteering} alt="Volunteering" className="card-image" />
            <div className="card-content">
              <h3>Volunteering at Local Shelter</h3>
              <p>Description: Volunteered weekly at the local shelter, providing meals and support to those in need.</p>
              <p>Date: 2021 - Present</p>
            </div>
          </div>

          <div className="card">
            <img src={fundraising} alt="Fundraising Campaign" className="card-image" />
            <div className="card-content">
              <h3>Fundraising Campaigns</h3>
              <p>Description: Organized fundraising events to support local charities and non-profits.</p>
              <p>Date: 2020 - Present</p>
            </div>
          </div>

          <div className="card">
            <img src={helping} alt="helping" className="card-image" />
            <div className="card-content">
              <h3>Helping Others</h3>
              <p>Description: Helpin others through sharing resources and guiding to success.</p>
              <p>Date: 2021 - Present</p>
            </div>
          </div>
          {/* Add more contributions as needed */}
        </div>
      </section>
    </div>
  );
}

export default Contributions;
