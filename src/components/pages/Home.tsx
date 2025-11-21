import About from "../About/About";
import Contact from "../Contact/Contact";
import Courses from "../Courses/Courses";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Internship from "../Internship/Internship";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import Stats from "../Stats/Stats";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Courses />
      <Internship/>
      <Stats/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
