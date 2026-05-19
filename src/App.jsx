import "./styles/global.css";

import Glows from "./components/layout/Glows";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Technologies from "./components/sections/Technologies";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import LanguageProvider from "./i18n/LanguageProvider";
import useLanguage from "./i18n/useLanguage";

function Portfolio() {
  const { content } = useLanguage();

  return (
    <>
      <a className="skip-link" href="#conteudo">
        {content.skip}
      </a>
      <Glows />
      <Nav />
      <main id="conteudo">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  );
}
