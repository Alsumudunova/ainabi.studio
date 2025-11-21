import { useState, useEffect } from "react";
import "./Testimonials.css";

interface Testimonial {
  name: string;
  text: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Айдана",
    role: "Flutter студент",
    text:
      "Ainabi Studio мага нөлдөн баштап биринчи тиркемемди жазганга жардам берди. Ментор абдан түшүндүрмө берет жана сабактар практика менен өтөт."
  },
  {
    name: "Даниар",
    role: "Web студент",
    text:
      "HTML, CSS, JS боюнча алган билимим менен 5 сайт жаздым. Студиянын стажировкасы эң мыкты тажрыйба болду!"
  },
  {
    name: "Мээрим",
    role: "Таргет студент",
    text:
      "Meta Ads боюнча толук түшүнүк алдым. Практикалык тапшырмалардан кийин өзүм таргет алып баштадым."
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto-play every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="testimonials-title">Студенттердин пикирлери</h2>

      <div className="slider">

        {/* LEFT ARROW */}
        <button className="arrow left" onClick={prevSlide}>
          ‹
        </button>

        {/* CARD */}
        <div className="testimonial-card fade">
          <p className="text">“{testimonials[index].text}”</p>
          <h3 className="name">{testimonials[index].name}</h3>
          <p className="role">{testimonials[index].role}</p>
        </div>

        {/* RIGHT ARROW */}
        <button className="arrow right" onClick={nextSlide}>
          ›
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
