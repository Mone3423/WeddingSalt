import { Link } from "react-router-dom";

const blogs = [
    { id: "1", title: "Top 5 Wedding Destinations in Uyuni", excerpt: "Discover the most breathtaking spots for your dream wedding.", image: "/images/BodaenelsalardeUyuni36.jpg" },
    { id: "2", title: "How to Plan a Wedding in the Salt Flats", excerpt: "Everything you need to know to plan the perfect wedding in Uyuni.", image: "/images/BodaenelSalardeUyuni (11) 3.jpg" },
    { id: "3", title: "Sustainable Weddings: Eco-Friendly Ideas", excerpt: "Plan an eco-friendly wedding while respecting nature.", image: "images/WeddingUyuniSaltFlats (2) 34.jpg" },
];

const BlogPage = () => {
   
    return (
        <div className="max-w-5xl mx-auto p-8">
          <h1 className="text-4xl font-bold text-center mb-8">Our Blog</h1>
      
          <div className="grid md:grid-cols-2 gap-6">
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <Link to={`/blog/${blog.id}`} key={blog.id} className="block group">
                  <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                    <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
                    <div className="p-4">
                      <h2 className="text-2xl font-semibold">{blog.title}</h2>
                      <p className="text-gray-600 mt-2">{blog.excerpt}</p>
                      <p className="text-primary font-semibold mt-4 group-hover:underline">
                        Read More →
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center text-gray-500">No blog posts available.</p>
            )}
          </div>
        </div>
      );
      
};

export default BlogPage;
