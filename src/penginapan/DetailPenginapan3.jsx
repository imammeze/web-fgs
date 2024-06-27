import { Link } from "react-router-dom";
import Footer from "../pages/Footer";

const DetailPenginapan3 = () => {
  return (
    <>
      <nav className="absolute w-full flex justify-between items-center px-16 py-4 bg-transparant shadow-md">
        <img src="/img/logo-fgs.png" />
        <ul className="flex gap-8 font-bold text-black text-base">
          <li>
            <Link to="/">Beranda</Link>
          </li>
          <li>
            <Link to="/penginapan">Penginapan</Link>
          </li>
        </ul>
      </nav>
      <div className="py-16 px-16">
        <div className="flex justify-between mt-16">
          <div className="flex flex-col">
            <img
              src="/img/penginapan3/1.jpg"
              className="w-[700px] h-[500px] rounded-3xl"
            />
            <div className="flex gap-10 flex-col mt-10">
              <div>
                <h1 className="text-3xl font-bold">Mountain View Villa</h1>
                <div className="flex gap-2 items-center mt-2">
                  <img src="/img/icon-lokasi.svg" />
                  <p>Desa Serang Rt 01 Rw 05 Kec. Karangreja, Purbalingga</p>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold">Deskripsi Penginapan</h1>
                <p className="text-sm text-justify mt-2">
                  Mountain View Villa adalah akomodasi yang sempurna untuk Anda
                  yang mencari suasana ramah dan nyaman seperti di rumah sendiri
                  selama liburan atau perjalanan bisnis. Terletak di lokasi
                  strategis yang dekat dengan berbagai destinasi wisata,
                  restoran, dan pusat perbelanjaan, Family Homestay menawarkan
                  pengalaman menginap yang menyenangkan dengan layanan yang
                  bersahabat dan fasilitas yang memadai.
                </p>
              </div>
              <div>
                <h1 className="text-3xl font-bold">Fasilitas Penginapan</h1>
                <div className="flex gap-4 max-w-[700px] mt-2">
                  <div className="flex flex-col items-center w-[150px] py-4 px-4 border rounded-lg shadow-lg">
                    <img className="w-[50px]" src="/icon/parkir.svg" />
                    <p className="text-center">Area Parkir</p>
                  </div>
                  <div className="flex flex-col items-center w-[150px] py-4 px-4 border rounded-lg shadow-lg">
                    <img className="w-[50px]" src="/icon/wifi.svg" />
                    <p className="text-center">Wifi</p>
                  </div>
                  <div className="flex flex-col items-center w-[150px] py-4 px-4 border rounded-lg shadow-lg">
                    <img className="w-[50px]" src="/icon/dapur.svg" />
                    <p className="text-center">Dapur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center gap-6 w-[600px] flex-wrap">
              <img
                src="/img/penginapan3/2.jpg"
                className="w-[250px] h-[240px] rounded-3xl  shadow-md"
              />
              <img
                src="/img/penginapan3/3.jpg"
                className="w-[250px] h-[240px] rounded-3xl shadow-md"
              />
              <img
                src="/img/penginapan3/4.jpg"
                className="w-[250px] h-[240px] rounded-3xl shadow-md"
              />
              <img
                src="/img/penginapan3/5.jpg"
                className="w-[250px] h-[240px] rounded-3xl shadow-md"
              />
            </div>
            <div className="flex flex-col gap-4 items-center px-4 py-4 w-[400px] mt-10 mx-auto border border-black rounded-2xl shadow-xl">
              <h1 className="text-2xl text-center py-4 font-semibold border-b-2 w-full border-black">
                Harga Penginapan
              </h1>
              <p className="font-bold text-4xl text-center">Rp 1.500.000,-</p>
              <p className="text-center">/ Malam</p>
              <Link
                to="https://wa.me/+6285742665770"
                className="w-3/4 px-8 py-2 text-center rounded-full linear-gradient border border-black">
                <a className="font-semibold text-base">Booking Sekarang</a>
              </Link>
              <div className="flex gap-2 items-center">
                <img src="/icon/info.svg" />
                <p className="text-sm">Harga dapat berubah kapan saja</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 mx-auto">
          <h1 className="text-3xl text-center py-4 font-bold">
            Lokasi Penginapan
          </h1>
          <iframea
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0371082609313!2d109.28252467404057!3d-7.236607271071336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ff1003619dae5%3A0xdc99ba82a8144c07!2sMountain%20View%20Villa%20Pratin!5e0!3m2!1sid!2sid!4v1719475743852!5m2!1sid!2sid"
            width="1200"
            height="600"
            className="rounded-2xl shadow-xl border"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframea>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailPenginapan3;