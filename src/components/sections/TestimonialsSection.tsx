
import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    content: "Working with ACME Corporation transformed our business. Their team delivered an exceptional website that has significantly increased our online presence and customer engagement.",
    author: "Emily Chen",
    position: "CEO, TechStart Inc.",
    company: "TechStart Inc.",
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80",
  },
  {
    content: "The mobile app developed by ACME has revolutionized how we connect with our customers. Their attention to detail and commitment to quality is unmatched in the industry.",
    author: "David Wilson",
    position: "CTO, Innovate Solutions",
    company: "Innovate Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
  },
  {
    content: "ACME's digital marketing strategy helped us double our online sales in just six months. Their data-driven approach and creative thinking delivered results beyond our expectations.",
    author: "Sophia Martinez",
    position: "Marketing Director, Global Retail",
    company: "Global Retail",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-company-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M36%2C34%20L24%2C34%20L24%2C22%20L36%2C22%20L36%2C34%20Z%20M55%2C16%20L45%2C16%20L45%2C6%20L55%2C6%20L55%2C16%20Z%20M15%2C16%20L5%2C16%20L5%2C6%20L15%2C6%20L15%2C16%20Z%20M55%2C56%20L45%2C56%20L45%2C46%20L55%2C46%20L55%2C56%20Z%20M15%2C56%20L5%2C56%20L5%2C46%20L15%2C46%20L15%2C56%20Z%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-company-400 mx-auto mb-6"></div>
          <p className="text-lg text-company-100 md:max-w-3xl mx-auto">
            Hear what our clients have to say about their experience working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-company-800/50 rounded-2xl p-10 backdrop-blur-sm border border-white/5">
            <Quote className="absolute top-6 left-6 h-10 w-10 text-company-400/30" />
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-company-400/40 to-company-500/40 opacity-70 blur"></div>
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author} 
                    className="relative w-full h-56 md:h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="mb-6">
                  <p className="text-lg text-gray-200 italic">"{testimonials[currentIndex].content}"</p>
                </div>
                <div>
                  <p className="font-heading font-semibold text-xl text-white">{testimonials[currentIndex].author}</p>
                  <p className="text-company-300">
                    {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-company-400 flex items-center justify-center hover:bg-company-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={18} className="text-company-400" />
              </button>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full ${
                    index === currentIndex ? "bg-company-400" : "bg-company-700"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-company-400 flex items-center justify-center hover:bg-company-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight size={18} className="text-company-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
