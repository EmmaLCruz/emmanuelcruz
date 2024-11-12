import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollToTopButton from "./components/ScrollToTopButton";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./styles/main.scss";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ScrollToTopButton />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
