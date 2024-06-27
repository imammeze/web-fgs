import { Link } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Footer from "./pages/Footer";

const Penginapan = () => {
  return (
    <>
      <Navbar />
      <div className="top-0 h-full">
        <img src="/img/hero-penginapan.png" className="w-full" />
        <div className="w-2/4 absolute top-2/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-[80px] font-bold">
            TEMPAT IDEAL UNTUK MELEPAS PENAT
          </h1>
          <p className="text-justify">
            Dengan fasilitas relaksasi dan lingkungan yang asri, kami adalah
            tempat ideal untuk melepas penat dan menyegarkan diri. Nikmati waktu
            bersama keluarga Anda dan jalani hari esok dengan ceria.
          </p>
        </div>
      </div>
      <div className="mx-auto py-16 px-10">
        <h1 className="text-6xl font-bold leading-tight text-center uppercase">
          Penginapan
        </h1>
        <div className="flex justify-center flex-wrap gap-4 mt-10">
          <div className="flex flex-col gap-3 py-4">
            <img
              className="w-[400px] h-[300px] rounded-3xl shadow-lg border border-r-8 border-b-8 border-black"
              src="/img/penginapan1/1.jpeg"
            />
            <h5 className="text-xl font-medium">Family Homestay 2</h5>
            <div className="flex gap-2 items-center">
              <img src="/img/icon-lokasi.svg" />
              <p className="w-[350px]">
                Desa Serang Rt 07 Rw 04 Kec. Karangreja, Purbalingga
              </p>
            </div>
            <Link
              to="/penginapan/detail/1"
              className="mx-auto px-8 py-2 w-1/3 text-center rounded-full linear-gradient border border-black">
              <a className="font-semibold text-base">Detail</a>
            </Link>
          </div>
          <div className="flex flex-col gap-3 py-4">
            <img
              className="w-[400px] h-[300px] rounded-3xl shadow-lg border border-r-8 border-b-8 border-black"
              src="/img/penginapan2/1.jpeg"
            />
            <h5 className="text-xl font-medium">Khaira Homestay</h5>
            <div className="flex gap-2 items-center">
              <img src="/img/icon-lokasi.svg" />
              <p className="w-[350px]">
                Desa Serang Rt 04 Rw 04 Kec. Karangreja, Purbalingga
              </p>
            </div>
            <Link
              to="/penginapan/detail/2"
              className="mx-auto px-8 py-2 w-1/3 text-center rounded-full linear-gradient border border-black">
              <a className="font-semibold text-base">Detail</a>
            </Link>
          </div>
          <div className="flex flex-col gap-3 py-4">
            <img
              className="w-[400px] h-[300px] rounded-3xl shadow-lg border border-r-8 border-b-8 border-black"
              src="/img/penginapan3/1.jpg"
            />
            <h5 className="text-xl font-medium">Mountain View Villa</h5>
            <div className="flex gap-2 items-center">
              <img src="/img/icon-lokasi.svg" />
              <p className="w-[350px]">
                Desa Serang Rt 01 Rw 05 Kec. Karangreja, Purbalingga
              </p>
            </div>
            <Link
              to="/penginapan/detail/3"
              className="mx-auto px-8 py-2 w-1/3 text-center rounded-full linear-gradient border border-black">
              <a className="font-semibold text-base">Detail</a>
            </Link>
          </div>
          <div className="flex flex-col gap-3 py-4">
            <img
              className="w-[400px] h-[300px] rounded-3xl shadow-lg border border-r-8 border-b-8 border-black"
              src="/img/penginapan4/1.jpeg"
            />
            <h5 className="text-xl font-medium">Strawbery Homestay</h5>
            <div className="flex gap-2 items-center">
              <img src="/img/icon-lokasi.svg" />
              <p className="w-[350px]">
                Desa Serang Rt 03 Rw 04 Kec. Karangreja, Purbalingga
              </p>
            </div>
            <Link
              to="/penginapan/detail/4"
              className="mx-auto px-8 py-2 w-1/3 text-center rounded-full linear-gradient border border-black">
              <a className="font-semibold text-base">Detail</a>
            </Link>
          </div>
          <div className="flex flex-col gap-3 py-4">
            <img
              className="w-[400px] h-[300px] rounded-3xl shadow-lg border border-r-8 border-b-8 border-black"
              src="/img/penginapan5/1.jpg"
            />
            <h5 className="text-xl font-medium">Wisma Griyaku</h5>
            <div className="flex gap-2 items-center">
              <img src="/img/icon-lokasi.svg" />
              <p className="w-[350px]">
                Desa Serang Rt 03 Rw 04 Kec. Karangreja, Purbalingga
              </p>
            </div>
            <Link
              to="/penginapan/detail/5"
              className="mx-auto px-8 py-2 w-1/3 text-center rounded-full linear-gradient border border-black">
              <a className="font-semibold text-base">Detail</a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Penginapan;
