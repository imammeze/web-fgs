import Deskripsi from "../components/about/Deskripsi";
import ImageAbout from "../components/about/ImageAbout";

const About = () => {
  return (
    <div id="about" className="px-24 py-16 flex gap-24">
      <Deskripsi />
      <ImageAbout />
    </div>
  );
};

export default About;
