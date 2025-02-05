import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
      <div className="p-5">
        <h3 className="text-2xl font-semibold text-gray-800">{blog.title}</h3>
        <p className="text-sm text-gray-500">{blog.date}</p>
        <p className="mt-2 text-gray-600">{blog.description.substring(0, 100)}...</p>
        <Link to={`/blog/${blog.id}`} className="mt-4 inline-block text-blue-600 font-semibold hover:underline">
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
