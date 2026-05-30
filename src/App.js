import { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [deal, setDeal] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: 79999,
      category: "Mobiles",
      image: "/images/iphone.webp",
    },
    {
      id: 2,
      name: "Samsung Galaxy S25",
      price: 59999,
      category: "Mobiles",
      image: "/images/samsung.webp",
    },
    {
      id: 3,
      name: "Kurta",
      price: 1499,
      category: "Fashion",
      deal: "kurta",
      image: "/images/kurta.webp",
    },
    {
      id: 4,
      name: "Jacket",
      price: 1999,
      category: "Fashion",
      deal: "jackets",
      image: "/images/jacket.webp",
    },
    {
      id: 5,
      name: "Laptop",
      price: 55999,
      category: "Electronics",
      image: "/images/laptop.webp",
    },
    {
      id: 6,
      name: "Smart TV",
      price: 45999,
      category: "TVs & Appliances",
      image: "/images/smarttv.webp",
    },
    {
      id: 7,
      name: "Rice Pack",
      price: 899,
      category: "Grocery",
      image: "/images/rice.jpg",
    },
    {
      id: 8,
      name: "Nike Air Jordan",
      price: 8999,
      category: "Fashion",
      deal: "shoes",
      image: "/images/nike.jpg"
    },

    {
      id: 9,
      name: "Rolex Datejust",
      price: 25999,
      category: "Fashion",
      deal: "watches",
      image: "/images/rolex.jpg"
    },

    {
      id: 10,
      name: "Safari Trolley Bag",
      price: 3499,
      category: "Fashion",
      deal: "bags",
      image: "/images/trolleybag.jpg"
    },

    {
      id: 11,
      name: "Winter Sweater",
      price: 1299,
      category: "Fashion",
      deal: "sweaters",
      image: "/images/swaeter.jpg"
    }
  ];

  const filteredProducts = products.filter((product) => {
    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "" ? true : product.category === category;
    const dealMatch =
      deal === "" ? true : product.deal === deal;

    return searchMatch && categoryMatch && dealMatch;
  });

  const showProducts =
    search.trim() !== "" ||
    category !== "" ||
    deal !== "";
  return (
    <div>
      <header className="navbar">
        <div className="logo">
          <img src="/images/logo.jpg" alt="Flipkart" />
          <span>
            Explore <b>Plus</b>
          </span>
        </div>

        <input
          type="text"
          placeholder="Search for products, brands and more"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="nav-links">
          {
            loggedIn ? (
              <span>Hello User</span>
            ) : (
              <button
                className="login-btn"
                onClick={() => setLoggedIn(true)}
              >
                Login
              </button>
            )
          }
          <span>Cart ({cart})</span>
          <span>Become a Seller</span>
        </div>
      </header>

      {!showProducts && (
        <>
          <section className="categories">
            <div
              className="cat"
              onClick={() => setCategory("Mobiles")}
            >
              <img src="/images/mobile.webp" alt="" />
              <p>Mobiles</p>
            </div>

            <div
              className="cat"
              onClick={() => setCategory("Fashion")}
            >
              <img src="/images/fashion.png" alt="" />
              <p>Fashion</p>
            </div>

            <div
              className="cat"
              onClick={() => setCategory("Electronics")}
            >
              <img src="/images/electronics.jpg" alt="" />
              <p>Electronics</p>
            </div>

            <div
              className="cat"
              onClick={() => setCategory("TVs & Appliances")}
            >
              <img src="/images/tv.webp" alt="" />
              <p>TVs & Appliances</p>
            </div>

            <div
              className="cat"
              onClick={() => setCategory("Grocery")}
            >
              <img src="/images/grocery.webp" alt="" />
              <p>Grocery</p>
            </div>
          </section>

          <section className="banner">
            <img src="/images/banner.webp" alt="" />
          </section>

          <section className="deals">
            <h2>Top Deals</h2>

            <div className="deal-items">
              <div
                className="item"
                onClick={() => setDeal("jackets")}
              >
                <img src="/images/deal1.webp" alt="" />
              </div>

              <div
                className="item"
                onClick={() => setDeal("sweaters")}
              >
                <img src="/images/deal2.webp" alt="" />
              </div>

              <div
                className="item"
                onClick={() => setDeal("kurta")}
              >
                <img src="/images/deal3.webp" alt="" />
              </div>

              <div
                className="item"
                onClick={() => setDeal("bags")}
              >
                <img src="/images/deal4.webp" alt="" />
              </div>

              <div
                className="item"
                onClick={() => setDeal("watches")}
              >
                <img src="/images/deal5.webp" alt="" />
              </div>

              <div
                className="item"
                onClick={() => setDeal("shoes")}
              >
                <img src="/images/deal6.webp" alt="" />
              </div>
            </div>
          </section>
        </>
      )}

      {showProducts && (
        <section className="products">
          <button
            className="home-btn"
            onClick={() => {
              setCategory("");
              setSearch("");
              setDeal("");
            }}
          >
            Back To Home
          </button>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt="" />

                <h3>{product.name}</h3>

                <p>₹{product.price}</p>

                <button
                  onClick={() => setCart(cart + 1)}
                >
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer>
        <div className="footer-item">+ Become a Seller</div>
        <div className="footer-item">+ Advertise</div>
        <div className="footer-item">+ Gift Cards</div>
        <div className="footer-item">+ Help Center</div>
        <div className="footer-item">+ Contact-Us</div>

        <div className="copy">© 2026 Flipkart</div>
      </footer>
    </div>
  );
}

export default App;