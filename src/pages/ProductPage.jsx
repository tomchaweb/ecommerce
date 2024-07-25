import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router";
import { CartContext, WishlistContext } from "../App";

import data from "../data";

import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import ReviewSection from "../components/ReviewSection";
import AdditionalInfoSection from "../components/AdditionalInfoSection";
import ProductDescription from "../components/ProductDescription";
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom";
import HeartIcon from "../components/svg/HeartIcon";
import HeartFillIcon from "../components/svg/HeartFillIcon";
import ImageModal from "../components/ImageModal";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [visibleTab, setVisibleTab] = useState("description");
  const [isLiked, setLiked] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const { cart, setCart } = useContext(CartContext);
  const { wishlist, setWishlist } = useContext(WishlistContext);

  let idIsValid;
  const { id } = useParams();
  if (Number(id) > data.length) {
    idIsValid = false;
  } else idIsValid = true;

  const product = data.find((entry) => entry.id === Number(id));

  if (idIsValid) {
    useEffect(() => {
      if (wishlist.find((item) => item.id === product.id)) {
        setLiked(true);
      }
    }, []);
  }

  const relatedProducts = data.filter((item) => {
    return item.id <= 4;
  });

  const [mainImage, setMainImage] = useState(0);

  function activeImage(e) {
    let targetId = e.target.closest("div").id;
    setMainImage(targetId);
  }

  function toggleModal() {
    if (modalActive === true) {
      setModalActive(false);
    } else if (modalActive === false) {
      setModalActive(true);
    }
  }

  function lowerQuantity() {
    let newQuant;
    if (quantity > 1) {
      newQuant = quantity - 1;
      setQuantity(newQuant);
    }
  }

  function higherQuantity() {
    let newQuant;
    newQuant = quantity + 1;
    setQuantity(newQuant);
  }

  function addToCart() {
    if (quantity > 0) {
      if (cart.find((item) => item.id === product.id)) {
        let updatedCart = cart.map((item) => {
          if (item.id === product.id) {
            return { id: item.id, quantity: item.quantity + quantity };
          } else {
            return { id: item.id, quantity: item.quantity };
          }
        });
        setCart(updatedCart);
      } else {
        setCart((prevItems) => {
          return [...prevItems, { id: product.id, quantity: quantity }];
        });
      }
      setQuantity(1);
    }
  }

  function addToWishlist() {
    setWishlist((prevItems) => {
      return [
        ...prevItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          info: product.info,
          images: product.images,
          rating: product.rating,
        },
      ];
    });
    setLiked(true);
  }

  function changeTab(e) {
    let { section } = e.target.dataset;
    if (section === "desc") {
      setVisibleTab("description");
    } else if (section === "additional-info") {
      setVisibleTab("additionalInfo");
    } else if (section === "reviews") {
      setVisibleTab("reviews");
    }
  }

  return (
    <>
      <ScrollToTop />
      {idIsValid ? (
        <div className="product-page">
          <section className="product-hero">
            <div className="product-img-container">
              <div className="thumbnails">
                {product.images.map((image, index) => {
                  return (
                    <div
                      className={
                        mainImage == index
                          ? "thumbnail-img-container active-thumbnail"
                          : "thumbnail-img-container"
                      }
                      key={index}
                      id={index}
                      onClick={activeImage}
                    >
                      <img src={image} key={index}></img>
                    </div>
                  );
                })}
              </div>
              <img
                className="main-img"
                src={product.images[mainImage]}
                onClick={toggleModal}
              ></img>
            </div>
            <div className="product-text">
              <h1>{product.name}</h1>
              <h2>£{product.price}</h2>
              <div className="product-rating"></div>
              <p>{product.info}</p>
              <div className="product-text-buttons">
                <div className="product-quantity">
                  <span>Quantity</span>
                  <button
                    className="lower-quantity-btn"
                    onClick={lowerQuantity}
                  >
                    -
                  </button>
                  <span className="current-quantity-field">{quantity}</span>
                  <button
                    className="higher-quantity-btn"
                    onClick={higherQuantity}
                  >
                    +
                  </button>
                </div>
                <button className="add-to-cart-btn" onClick={addToCart}>
                  Add to cart
                </button>
              </div>
              {!isLiked ? (
                <button className="add-to-wishlist-btn" onClick={addToWishlist}>
                  <div className="add-to-wishlist-btn-img-container">
                    <HeartIcon size={16} color={"currentColor"} />
                  </div>
                  Add to wishlist
                </button>
              ) : (
                <button className="add-to-wishlist-btn">
                  <div className="add-to-wishlist-btn-img-container">
                    <HeartFillIcon size={16} color={"currentColor"} />
                  </div>
                  In Wishlist
                </button>
              )}
              <span>SKU: {id}</span>
            </div>
          </section>
          <section className="tabbed-product-info">
            <div className="section-tabs">
              <button
                className={visibleTab === "description" ? "active-tab" : null}
                onClick={changeTab}
                data-section="desc"
              >
                Description
              </button>
              <button
                className={
                  visibleTab === "additionalInfo" ? "active-tab" : null
                }
                onClick={changeTab}
                data-section="additional-info"
              >
                Additional Information
              </button>
              <button
                className={visibleTab === "reviews" ? "active-tab" : null}
                onClick={changeTab}
                data-section="reviews"
              >
                Reviews
              </button>
            </div>
            {visibleTab === "description" && <ProductDescription />}
            {visibleTab === "additionalInfo" && <AdditionalInfoSection />}
            {visibleTab === "reviews" && <ReviewSection />}
          </section>
          <section className="related-products">
            <h2>Related Products</h2>
            <div className="related-product-cards">
              {relatedProducts.map((item) => {
                return (
                  <Link to={"/products/" + item.id.toString()} key={item.id}>
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
          </section>
          <ImageModal
            isActive={modalActive}
            img={product.images[mainImage]}
            handleClick={toggleModal}
          />
        </div>
      ) : (
        <div className="product-not-found">
          <h1>Product Not Found</h1>
          <h2>Whoops! No matching products</h2>
          <Link to="/products">View products</Link>
        </div>
      )}
      <Footer />
    </>
  );
}
