import ImageLokasi from "../components/lokasi/ImageLokasi";
import JudulLokasi from "../components/lokasi/JudulLokasi";

const Lokasi = () => {
  return (
    <div className="flex py-16 px-16 gap-16">
      <JudulLokasi />
      <ImageLokasi />
    </div>
  );
};

export default Lokasi;
