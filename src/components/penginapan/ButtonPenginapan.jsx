import { Link } from "react-router-dom";

const ButtonPenginapan = () => {
  return (
    <div className="text-center mt-16">
      <Link
        to="/penginapan"
        className="px-8 py-3 rounded-full linear-gradient border border-black">
        <a className="font-semibold text-base">Lihat Lainya</a>
      </Link>
    </div>
  );
};

export default ButtonPenginapan;
