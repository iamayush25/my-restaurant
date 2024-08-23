import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Ensure Bootstrap JS is included
import "./Home.css";
import FirstCarousel from "../Images/carousel-1.png";
import SecondCarousel from "../Images/carousel-2.png";
import ThirdCarousel from "../Images/carousel-3.png";
import RajsthaniFood from "../Images/Rajsthani-Thali.jpg";
import Cake from "../Images/Party_Brownies.jpg";
import Salad from "../Images/Making-Peach-Salad.jpg";
import Footer from "../Footer/Footer";
import AboutMe from "../About/About";
import ContactPage from "../ContactUs/ContactUs";

function Home() {
  const ItemDetails = () => (
    <div className="container">
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7">
          <h1
            className="featurette-heading fw-normal lh-1 mb-5"
            style={{ color: "#FF6633" }}
          >
            Rajasthani Thali
          </h1>
          <p className="lead" style={{ textAlign: "justify" }}>
            Housing the Thar Desert, Rajasthan is an arid state with extreme
            climates and less vegetation. But it’s cuisine stands as a testament
            that the human love for food can surpass all barriers to create
            unique, rich and delicious dishes. We were blown away by the method
            of preparation, the ingredients, the depth and the taste of this
            thali.
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            src={RajsthaniFood}
            alt="Featurette 1"
          />
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h1
            className="featurette-heading fw-normal lh-1 mb-5"
            style={{ color: "#FF6633" }}
          >
            Party Brownies
          </h1>
          <p className="lead" style={{ textAlign: "justify" }}>
            Brownies covered with a thick layer of fudge frosting and rainbow
            sprinkles. The best way to jazz up a box of brownie mix!
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            src={Cake}
            alt="Featurette 2"
          />
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7">
          <h2
            className="featurette-heading fw-normal lh-1 mb-5"
            style={{ color: "#FF6633" }}
          >
            Spicy Shrimp with Peach Salad.
          </h2>
          <p className="lead" style={{ textAlign: "justify" }}>
            This is summertime in a bowl! Spicy shrimp with all the delicious
            heat, smoke, and sweetness we want, alongside a fresh peach and
            cucumber salad.
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            src={Salad}
            alt="Featurette 3"
          />
        </div>
      </div>
      <hr className="featurette-divider" />
    </div>
  );
  return (
    <div className="main">
      <div
        id="myCarousel"
        className="carousel slide mb-6"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={FirstCarousel}
              className="d-block w-100"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src={SecondCarousel}
              className="d-block w-100"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src={ThirdCarousel}
              className="d-block w-100"
              alt="Third slide"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <AboutMe />
      <ItemDetails />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default Home;
