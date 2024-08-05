import data from "../data";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import TruckIcon from "../components/svg/TruckIcon";
import CashCoinIcon from "../components/svg/CashCoinIcon";
import ChatIcon from "../components/svg/ChatIcon";
import CreditCardIcon from "../components/svg/CreditCardIcon";
import BenefitsCard from "../components/BenefitsCard";

export default function Home() {
  let newProducts = data.filter((item) => {
    return item.id <= 4;
  });

  const [activeHero, setActiveHero] = useState(0);

  const heroSlides = [
    {
      h1: "Welcome to Modal",
      h2: "For all your furnishing needs",
    },
    {
      h1: "Premium Comfort",
      h2: "Hand-crafted Materials",
    },
    {
      h1: "Expertly Designed",
      h2: "30 Years of experience",
    },
  ];

  function handleDotClick(e) {
    let { id } = e.target;
    setActiveHero(Number(id));
  }

  return (
    <>
      <ScrollToTop />
      <div className="home">
        <section key={Math.random()} className={`home-hero hero-${activeHero}`}>
          <div key={Math.random()} className="home-hero-text">
            <h1>{heroSlides[activeHero].h1}</h1>
            <h2>{heroSlides[activeHero].h2}</h2>
          </div>
          <div className="hero-dots">
            {heroSlides.map((item, index) => {
              return (
                <div
                  className={activeHero === index ? "dot active-dot" : "dot"}
                  key={`dot${index}`}
                  id={index}
                  onClick={handleDotClick}
                ></div>
              );
            })}
          </div>
        </section>
        <div className="benefits">
          <BenefitsCard
            icon={<TruckIcon size={32} color={"currentColor"} />}
            title={"Free Shipping"}
            subtitle={"All orders"}
          />
          <BenefitsCard
            icon={<CashCoinIcon size={32} color={"currentColor"} />}
            title={"Refund Guarantee"}
            subtitle={"30 days"}
          />
          <BenefitsCard
            icon={<ChatIcon size={32} color={"currentColor"} />}
            title={"Online Support"}
            subtitle={"Available 24/7"}
          />
          <BenefitsCard
            icon={<CreditCardIcon size={32} color={"currentColor"} />}
            title={"Flexible Payment"}
            subtitle={"Multiple Options"}
          />
        </div>
        <section className="new-arrivals">
          <h2>New Arrivals</h2>
          <div className="new-arrivals-grid">
            {newProducts.map((item) => {
              return (
                <Link to={`products/${item.id.toString()}`} key={item.id}>
                  <ProductCard
                    name={item.name}
                    img={item.images[0]}
                    price={item.price}
                    rating={item.rating}
                  />
                </Link>
              );
            })}
          </div>
          <Link className="view-all-products-btn" to="products">
            View more products
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
}
