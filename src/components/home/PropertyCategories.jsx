import { Link } from "react-router-dom";

const categories = [
  {
    name: "Luxury Villas",
    count: "48 Listings",
    path: "/luxury-villas",
    image: "https://i.pinimg.com/1200x/9c/9c/24/9c9c246228431e0d4af293d4603da044.jpg",
  },
  {
    name: "Modern Apartments",
    count: "76 Listings",
    path: "/modern-apartments",
    image: "https://i.pinimg.com/1200x/c5/9d/8f/c59d8fe58e1968828d85a0daa2dbe351.jpg",
  },
  {
    name: "Commercial Spaces",
    count: "23 Listings",
    path: "/commercial-spaces",
    image: "https://i.pinimg.com/736x/86/9e/83/869e837b25c77bdd8f16ee4e7e360eeb.jpg",
  },
  {
    name: "Plots & Land",
    count: "34 Listings",
    path: "/plots-land",
    image: "https://i.pinimg.com/736x/62/11/4e/62114e08dd8e2ea7b4c5c98c221f6195.jpg",
  },
];

function PropertyCategories() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-premium">
        <div className="section-heading">
          <span className="section-tag">Browse by Category</span>
          <h2 className="section-title">Find What Suits You Best</h2>
          <p className="section-subtitle">
            Whether you're looking to buy, invest, or build — explore properties by category.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((cat) => (
            <Link key={cat.name} to={cat.path} className="category-card">
              <img src={cat.image} alt={cat.name} className="category-image" />
              <div className="category-overlay" />
              <div className="category-content">
                <h3 className="category-name">{cat.name}</h3>
                <p className="category-count">{cat.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PropertyCategories;