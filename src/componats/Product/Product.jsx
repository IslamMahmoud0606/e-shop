import React, { useEffect, useState } from "react";
import "../Product/Product.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import Loading from "../Loading/Loading";

export default function Product() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) throw new Error("Error fetching data");
      const result = await response.json();
      setProducts(result);
    } catch (e) {
      setError("Something went wrong, please check your internet connection and try again");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div>
      <div className="product-title">
        <h1>All Products</h1>
      </div>

      <div className="all-product">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} className="image" />
            <div className="details">
              <h3 className="name">{product.title}</h3>
              <p className="description">{product.description}</p>
              <div className="stars">
                {product.rating && 
                  [...Array(Math.round(product.rating.rate))].map((_, i) => (
                    <i key={i}>
                      <FontAwesomeIcon icon={faStar} style={{ color: "#e0b000" }} />
                    </i>
                  ))}
                <span>({product.rating ? product.rating.rate : "No rating"})</span>
              </div>
              <div className="price-cart-btn">
                <p className="price">${product.price}</p>
                <button className="cart-btn">
                  <FontAwesomeIcon icon={faCartShopping} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
