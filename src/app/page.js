import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Animations from '../components/Animations';

export default function Home() {
  return (
    <>
      <Animations />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
