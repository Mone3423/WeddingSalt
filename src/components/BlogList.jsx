import BlogCard from "./BlogCard";

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 5 Wedding Destinations in Uyuni",
      image: "https://source.unsplash.com/600x400/?wedding,bolivia",
      date: "February 5, 2024",
      description: "Discover the most breathtaking locations for a wedding in Salar de Uyuni...",
    },
    {
      id: 2,
      title: "How to Plan a Wedding in the Salt Flats",
      image: "https://source.unsplash.com/600x400/?bride,groom",
      date: "January 20, 2024",
      description: "Planning a wedding in Uyuni? Here are the essential tips to make it magical...",
    },
    {
      id: 3,
      title: "Sustainable Weddings: Eco-Friendly Ideas",
      image: "https://source.unsplash.com/600x400/?nature,wedding",
      date: "January 10, 2024",
      description: "Want an eco-friendly wedding? Check out these sustainable ideas...",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-4xl font-bold text-center text-gray-800">Our Blog</h2>
      <p className="text-center text-gray-500 mt-2 mb-8">
        Discover wedding tips, love stories, and inspiration from Uyuni.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
