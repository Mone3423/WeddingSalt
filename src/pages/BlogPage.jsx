import { Link } from "react-router-dom";

const blogs = [
    { id: "1", title: "Top 5 Wedding Destinations in Uyuni", excerpt: "Discover the most breathtaking spots for your dream wedding.", image: "https://source.unsplash.com/800x400/?wedding,bolivia" },
    { id: "2", title: "How to Plan a Wedding in the Salt Flats", excerpt: "Everything you need to know to plan the perfect wedding in Uyuni.", image: "https://source.unsplash.com/800x400/?bride,groom" },
    { id: "3", title: "Sustainable Weddings: Eco-Friendly Ideas", excerpt: "Plan an eco-friendly wedding while respecting nature.", image: "https://source.unsplash.com/800x400/?nature,wedding" },
];

const BlogPage = () => {
    return (
        <div className="max-w-5xl mx-auto p-8">
            <h1 className="text-4xl font-bold text-center mb-8">Our Blog</h1>

            <div className="grid md:grid-cols-2 gap-6">
                {blogs.length > 0 ? (
                    blogs.map((blog) => (
                        <Link to={`/blog/${blog.id}`} className="block group">
                            <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                                <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
                                <div className="p-4">
                                    <h2 className="text-2xl font-semibold">{blog.title}</h2>
                                    <p className="text-gray-600 mt-2">{blog.excerpt}</p>
                                    <p className="text-blue-600 font-semibold mt-4 group-hover:underline">
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
