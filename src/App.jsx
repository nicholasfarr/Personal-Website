import BackgroundGlobe from "./components/BackgroundGlobe";
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

// App.jsx
export default function App() {
  return (
    <div className="relative text-gray-900 dark:text-white bg-transparent dark:bg-transparent">
      <BackgroundGlobe />
      <Header />
      <main className="pt-14">{/* header is ~56px tall */} 
        <Hero />
        <About />
        <Experience />
        <Projects />
  
        <Contact />
      </main>
      <Footer />
    </div>
  );
}