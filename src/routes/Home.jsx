import Hero from "../components/Hero";
import About from "../components/About";
import Apply from "../components/Apply";
import Gallery from "../components/Gallery";
import Spotlight from "../components/Spotlight";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Spotlight />
      <Gallery />
      <Apply />
    </div>
  );
}

export default Home;
