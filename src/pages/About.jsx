import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function About() {
  return (
    <>
      <ScrollToTop />
      <div className="about-page">
        <section className="about-header">
          <h1>Get to know us</h1>
        </section>
        <section className="about-main">
          <div className="about-us-text-box">
            <h2>Our Story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
              ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus
              et magnis dis parturient montes nascetur ridiculus mus. Vestibulum
              ultricies aliquam convallis.
            </p>
          </div>
          <img></img>
          <img></img>
          <div className="about-us-text-box">
            <h2>Our Vision</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
              ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus
              et magnis dis parturient montes nascetur ridiculus mus. Vestibulum
              ultricies aliquam convallis.
            </p>
          </div>
        </section>
        <section className="about-key-points">
          <div className="about-key-points-card"></div>
          <div className="about-key-points-card"></div>
          <div className="about-key-points-card"></div>
        </section>
      </div>
      <Footer />
    </>
  );
}
