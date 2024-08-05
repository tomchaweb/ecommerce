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
            <h2>Our Vision</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
              ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus
              et magnis dis parturient montes nascetur ridiculus mus. Vestibulum
              ultricies aliquam convallis.
            </p>
            <h2>Our Goals</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
              ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus
              et magnis dis parturient montes nascetur ridiculus mus. Vestibulum
              ultricies aliquam convallis.
            </p>
          </div>
          <img
            className="about-img"
            src="./woman.jpg"
            alt="woman looking at wall decorations"
          ></img>
        </section>
      </div>
      <Footer />
    </>
  );
}
