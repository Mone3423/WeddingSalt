import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ContactForm from "../components/ContactForm";
const blogs = [
  {
    id: 1,
    title: "Your Dream Wedding on the Salt Flats: A Step-by-Step Guide",
    image: "https://source.unsplash.com/800x400/?wedding,bolivia",
    date: "February 5, 2024",
    content: `
      Imagine exchanging vows on a vast white canvas that stretches as far as the eye can see, where sky and earth merge in perfect harmony. 
      ## Choose Your Season
      Decide between the dry season (May-November) for classic white landscapes or the wet season (December-April) for stunning mirror effects.
      ## Set Your Budget
      Factor in travel costs, accommodation, and special services unique to this remote location.
     ## Book Early
      Secure your date at least 9-12 months in advance, especially during peak seasons.
      ## Legal Requirements
Research Bolivian marriage laws and necessary documentation for foreign couples.

      ## Guest List
Consider the remote location when deciding on your guest count.

      ## Accommodation
Book unique salt hotels or luxury lodges for you and your guests.

      ## Ceremony Details
Plan your ceremony layout, considering the vast open space and potential for creative setups.

      ## Photography
Hire experienced salt flat photographers who know how to capture the unique landscape.

      ## Weather Preparations
Prepare for intense sun or potential rain depending on the season.

      ## Cultural Elements
Consider incorporating Bolivian traditions to make your ceremony truly special.
      `,
    images: [
      "/images/BodaenelSalardeUyuni (5) 12.jpg",
      "/images/BodaenelSalardeUyuni (6) 13.jpg",
      "/images/BodaenelSalardeUyuni (7) 14.jpg",
    ],
  },
  { 
  id: 2,
  title: "Salt Flat Weddings: Choosing Between Ethereal White or Mirrored Magic",
  image: "https://source.unsplash.com/800x400/?bride,groom",
  date: "January 20, 2024",
  content: `
      Salar de Uyuni offers two distinct yet equally breathtaking settings for your wedding, depending on when you visit.
      ## Dry Season (May to November)
      • Vast, bright white salt plains stretching to the horizon
      • Clear, sunny skies perfect for daytime ceremonies
      • Easier accessibility and more predictable weather
      • Ideal for classic white wedding themes
      • Stunning stargazing opportunities for evening receptions
      ## Wet Season (December to April)
      • Thin layer of water creates a mirror effect, reflecting the sky
      • Surreal, dreamlike landscapes for truly unique wedding photos
      • Cooler temperatures, perfect for outdoor celebrations
      • Vibrant sunsets and sunrises for magical ceremony backdrops
      • Chance to capture incredible reflection shots
      ---
      Whichever season you choose, your Salar de Uyuni wedding is guaranteed to be a visual spectacle. The dry season offers reliability and classic beauty, while the wet season provides otherworldly reflections and cooler temperatures.
    `,
  images: [
    "/images/BodaenelSalardeUyuni (8) 15.jpg",
    "/images/BodaenelSalardeUyuni (9) 16.jpg",
    "/images/BodaenelSalardeUyuni (10) 2.jpg",
  ],
  },
{
  id: 3,
    title: "Blend Culture with Love: Bolivian Wedding Traditions for Your Salar de Uyuni Ceremony",
      image: "https://source.unsplash.com/800x400/?wedding,tradition",
        date: "January 10, 2024",
          content: `
      Make your salt flat wedding truly unique by incorporating some beautiful Bolivian traditions. These customs will not only honor the local culture but also add depth and meaning to your celebration.
      ## 1. Ch'alla Ceremony
      This Andean ritual involves sprinkling alcohol on the ground as an offering to Pachamama (Mother Earth). Incorporate this at the beginning of your ceremony for blessings and good fortune.
      ## 2. Andean Music
      Include traditional Bolivian instruments like the charango or zampoñas in your ceremony or reception music for an authentic touch.
      ## 3. Colorful Textiles
      Use vibrant Andean textiles as part of your decor or in your attire. These can make for stunning photo opportunities against the white salt flats.
      ## 4. "El Lazo" (The Lasso)
      In this tradition, a decorative cord is draped around the couple's shoulders in a figure-eight shape, symbolizing infinite love and unity.
      ## 5. Coca Leaf Reading
      Offer your guests a traditional coca leaf reading, a practice deeply rooted in Andean culture, as a unique pre-ceremony activity.
      ## 6. Andean Salt Ceremony
      Create a twist on the unity sand ceremony by using salt from Salar de Uyuni, symbolizing your commitment in this unique location.
      ## 7. Traditional Bolivian Attire
      Consider incorporating elements of traditional Bolivian dress into your wedding attire or that of your wedding party.
      ---
      By weaving these traditions into your salt flat wedding, you'll create a rich, meaningful experience that honors the beautiful location and culture of Bolivia.
    `,
            images: [
              "/images/WeddingUyuniSaltFlats (1) 17.jpg",
              "/images/WeddingUyuniSaltFlats (2) 18.jpg",
              "/images/WeddingUyuniSaltFlats (3) 19.jpg",
            ],
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const foundBlog = blogs.find((b) => b.id === parseInt(id));
    setBlog(foundBlog);
  }, [id]);

  if (!blog) {
    return <p className="text-center text-gray-500">Blog not found.</p>;
  }

  // Obtener blogs recomendados (excluyendo el actual)
  const recommendedBlogs = blogs.filter((b) => b.id !== parseInt(id)).slice(0, 2);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Carrusel de imágenes */}
      <Swiper modules={[Autoplay]} spaceBetween={10} slidesPerView={1} autoplay={{ delay: 4000 }} loop={true} className="w-full mb-6">
        {blog.images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={blog.title} className="w-full h-96 object-cover rounded-lg" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Título y fecha */}
      <h1 className="text-4xl font-bold text-gray-800">{blog.title}</h1>
      <p className="text-gray-500 text-sm mt-2">{blog.date}</p>

      {/* Contenido del artículo mejorado */}
      <div className="mt-6 text-gray-700 space-y-6">
        {blog.content.split("## ").map((section, i) => (
          <div key={i} className="border-b border-gray-300 pb-4">
            {i === 0 ? (
              <p className="text-lg">{section}</p>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-accent mt-6 mb-2">{section.split("\n")[0]}</h2>
                <p className="text-gray-700 text-lg">{section.split("\n").slice(1).join("\n")}</p>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <ContactForm />
      
      {/* Botones para compartir */}
      <div className="mt-6 flex space-x-4">
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-10" />
        </a>
        <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-10" />
        </a>
        <a href={`https://api.whatsapp.com/send?text=${window.location.href}`} target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" className="w-10" />
        </a>
        <a href={`https://www.instagram.com/`} target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png" alt="Instagram" className="w-10" />
        </a>
      </div>

      {/* Botón de regreso */}
      <Link to="/blog" className="mt-6 inline-block font-semibold hover:underline">
        ← Back to Blog
      </Link>
      {/* Sección de Blogs Recomendados */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recommended Articles</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {recommendedBlogs.map((recBlog) => (
            <Link
              key={recBlog.id}
              to={`/blog/${recBlog.id}`}
              className="block bg-gray-100 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all"
            >
              <img src={recBlog.image} alt={recBlog.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{recBlog.title}</h3>
                <p className="text-sm text-gray-500">{recBlog.date}</p>
                <p className="text-gray-600 mt-2">{recBlog.content.substring(0, 80)}...</p>
                <span className="text-blue-600 font-semibold mt-2 inline-block hover:underline">Read More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
