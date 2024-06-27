import Sponsor from "./components/header/Sponsor";
import About from "./pages/About";
import Galeri from "./pages/Galeri";
import Header from "./pages/Header";
import Lokasi from "./pages/Lokasi";
import Penginapan from "./pages/ListPenginapan";
import Poster from "./pages/Poster";
import Footer from "./pages/Footer";
import Timeline from "./pages/Timeline";

function App() {
  return (
    <div>
      <Header />
      <Sponsor />
      <About />
      <Galeri />
      <Poster />
      <Timeline />
      <Lokasi />
      <Penginapan />
      <Footer />
    </div>
  );
}

export default App;
