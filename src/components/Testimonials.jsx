import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Jonathan & Dakyo",
    images: [
      "/images/testimonials/BodaenelSalardeUyuni35.jpg",
      "/images/testimonials/BodaenelSalardeUyuni39.jpg",
      "/images/testimonials/WeddingUyuniSaltWalts22.jpg",
    ],
    comment: "Our wedding in Uyuni was a dream come true. Thank you for making it unforgettable!"
  },

];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">What Our Couples Say</h2>
        <TestimonialCard testimonial={testimonials[0]} />
      </div>
    </section>
  );
};

export default Testimonials;
