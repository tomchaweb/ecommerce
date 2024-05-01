import { Link } from "react-router-dom";
import { useState } from "react";

import data from "../data";

import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Products() {
  let [products, setProducts] = useState(data);

  function filterProducts(e) {
    let { filter } = e.target.dataset;

    switch (filter) {
      case "lessThan90":
        setProducts(
          data.filter((item) => {
            return item.price > 50 && item.price <= 90;
          })
        );
        break;
      case "lessThan50":
        setProducts(
          data.filter((item) => {
            return item.price > 30 && item.price <= 50;
          })
        );
        break;
      case "lessThan30":
        setProducts(
          data.filter((item) => {
            return item.price > 0 && item.price <= 30;
          })
        );
        break;
      case "reset":
        setProducts(data);
        break;
      default:
        break;
    }
  }

  function sortProducts(e) {
    let { sort } = e.target.dataset;

    if (sort === "price") {
      let sortedProducts = [...products].sort(function (a, b) {
        return a.price - b.price;
      });
      setProducts(sortedProducts);
    } else if (sort === "priceReverse") {
      let sortedProducts = [...products].sort(function (a, b) {
        return b.price - a.price;
      });
      setProducts(sortedProducts);
    } else if (sort === "name") {
      let sortedProducts = [...products].sort(function (a, b) {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
      setProducts(sortedProducts);
    } else if (sort === "rating") {
      let sortedProducts = [...products].sort(function (a, b) {
        return b.rating - a.rating;
      });
      setProducts(sortedProducts);
    }
  }

  return (
    <>
      <ScrollToTop />
      <div className="products">
        <div className="buttons">
          <div className="filter-buttons">
            <h2>Price Range</h2>
            <button onClick={filterProducts} data-filter="lessThan90">
              £50 - £90
            </button>
            <button onClick={filterProducts} data-filter="lessThan50">
              £30 - £50
            </button>
            <button onClick={filterProducts} data-filter="lessThan30">
              £0 - £30
            </button>
          </div>
          <div className="sort-buttons">
            <h2>Sort by</h2>
            <button onClick={sortProducts} data-sort="price">
              price: low to high
            </button>
            <button onClick={sortProducts} data-sort="priceReverse">
              price: high to low
            </button>
            <button onClick={sortProducts} data-sort="name">
              name: A-Z
            </button>
            <button onClick={sortProducts} data-sort="rating">
              rating
            </button>
          </div>
          <button
            className="reset-btn"
            onClick={filterProducts}
            data-filter="reset"
          >
            RESET FILTERS
          </button>
        </div>

        <div className="product-grid">
          {products.map((item) => (
            <Link to={item.id.toString()} key={item.id}>
              <ProductCard
                name={item.name}
                img={item.images[0]}
                price={item.price}
                rating={item.rating}
              />
            </Link>
          ))}
          <span>Showing {products.length} results</span>
        </div>
      </div>

      <Footer />
    </>
  );
}
