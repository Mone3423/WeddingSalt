import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-6 max-w-lg mx-auto">
      {/* Slider de 3 imágenes */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full mb-4"
      >
        {testimonial.images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={testimonial.name} className="w-full h-120 object-cover rounded-lg" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Información del testimonio */}
      <h3 className="text-xl font-semibold mt-4">{testimonial.name}</h3>
      <p className="text-gray-600 mt-2 italic">"{testimonial.comment}"</p>
    </div>
  );
};

export default TestimonialCard;
