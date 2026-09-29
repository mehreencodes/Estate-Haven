import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";
import blogPosts from "../data/blogPosts";

function BlogPostPage() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="relative min-h-screen">
        <Navbar />
        <div className="not-found">
          <h2 className="section-title">Post Not Found</h2>
          <p className="section-subtitle" style={{ marginBottom: "24px" }}>
            This blog post doesn't exist or has been removed.
          </p>
          <Link to="/blog">
            <Button variant="solid">Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <Navbar />

      <div style={{ paddingTop: "80px", position: "relative" }}>
        <Link to="/blog" className="back-btn">
          <ArrowLeft size={16} />
          Back to Blog
        </Link>
        <img src={post.image} alt={post.title} className="blog-post-hero-image" />
      </div>

      <div className="container-premium">
        <div className="blog-post-container">
          <span className="blog-post-category">{post.category}</span>
          <h1 className="blog-post-title">{post.title}</h1>

          <div className="blog-post-meta">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <div className="blog-post-content">
            {post.content.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>

      <div style={{ height: "80px" }} />
      <Footer />
    </div>
  );
}

export default BlogPostPage;