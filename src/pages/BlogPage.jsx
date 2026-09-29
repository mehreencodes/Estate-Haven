import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import blogPosts from "../data/blogPosts";

function BlogPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      {/* <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1800&q=85"
            alt=""
          />
        </div>
        <div className="page-hero-overlay"></div>
        <div className="container-premium page-hero-content">
          <div className="page-hero-bottom-line"></div>
          <span className="page-hero-tag">Our Blog</span>
          <h1 className="page-hero-title">
            Insights & <span>Guidance</span>
          </h1>
          <p className="page-hero-subtitle">
            Market trends, buying and selling tips, and neighborhood guides from our team.
          </p>
        </div>
      </section> */}
<section className="blog-hero">
  <div className="blog-hero-bg">
    <img
      src="https://i.pinimg.com/736x/cd/0c/b1/cd0cb15c10a588a70b5cae642dfb6035.jpg"
      alt="Blog"
    />
  </div>
  <div className="blog-hero-overlay"></div>

  <div className="blog-hero-content">
    <p className="blog-hero-eyebrow">Our Blog</p>
    <h1 className="blog-hero-title">
      Insights & <span>Market Updates</span>
    </h1>
  </div>
</section>

      <section className="section-padding bg-white">
        <div className="container-premium">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="blog-card">
                <div className="blog-card-image-wrap">
                  <img src={post.image} alt={post.title} className="blog-card-image" />
                  <span className="blog-card-category">{post.category}</span>
                </div>
                <div className="blog-card-info">
                  <div className="blog-card-meta">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <span className="blog-card-readmore">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BlogPage;