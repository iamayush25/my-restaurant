import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

function Footer() {
  return (
    <div className='bg-dark text-white'>
      <div className="container">
        <footer className="justify-content-center align-items-center row row-cols-1 row-cols-sm-2 row-cols-md-4 py-2 my-2">
          <div className="container-fluid text-white" style={{ display: 'flex' }}>
            <p className="text-center py-2" style={{ display: 'inline' }}>
              <h2 style={{fontFamily: 'Georgia, serif', fontWeight: 'bold', fontSize: '1.5rem', color: 'red'}} >S3 Restaurant</h2>
              All content in this WebSite <br /> ©Ayush Sharma <br /> is protected by copyright;
              unauthorized use is prohibited.
            </p>
          </div>
          <div className="col mb-3">
            <h5 className="text-white">Get In Touch</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 text-white">
                <i className="fa-solid fa-location-dot icon"></i>
                <span className="ms-2">Dewas, Madhya Pradesh</span>
              </li>
              <li className="nav-item mb-2">
                <i className="fa-regular fa-envelope-open icon"></i>
                <a href="mailto:ayush22@navgurukul.org" className="text-white">
                  <span className="ms-2">ayush22@navgurukul.org</span>
                </a>
              </li>
              <li className="nav-item mb-2 text-white">
                <i className="fa-solid fa-phone icon"></i>
                <span className="ms-2">+91 9993551109</span>
              </li>
            </ul>
          </div>
          <div className="col mb-3">
            <h5 className="text-white">Follow Us</h5>
            <div className="d-flex">
              <div
                className="me-2 text-white FollowMe"
                id="footer-icon"
                onClick={() => window.open('https://www.linkedin.com/in/ayushsharma25/', '_blank')}
              >
                <i className="fab fa-linkedin"></i>
              </div>
              <div
                className="me-2 text-white FollowMe"
                id="footer-icon"
                onClick={() => window.open('https://github.com/iamayush25', '_blank')}
              >
                <i className="fab fa-github"></i>
              </div>
              <div
                className="me-2 text-white FollowMe"
                id="footer-icon"
                onClick={() => window.open('https://x.com/MR_ASHU_25?s=09/', '_blank')}
              >
                <i className="fab fa-twitter"></i>
              </div>
              <div
                className="me-2 text-white FollowMe"
                id="footer-icon"
                onClick={() => window.open('https://www.instagram.com/_mr_ashu_25/', '_blank')}
              >
                <i className="fab fa-instagram"></i>
              </div>
            </div>
          </div>
          <hr style={{ width: "100%" }} />
        </footer>
      </div>
    </div>
  );
}

export default Footer;