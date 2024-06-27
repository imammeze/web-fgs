import DeskripsiPenutup from "../components/penutup/DeskripsiPenutup";
import JudulPenutup from "../components/penutup/JudulPenutup";

const Penutup = () => {
  return (
    <div className="py-16 px-20">
      <div className="flex py-8 px-10 items-center rounded-3xl shadow-lg border border-r-8 border-b-8 border-black">
        <JudulPenutup />
        <DeskripsiPenutup />
      </div>
    </div>
  );
};

export default Penutup;
