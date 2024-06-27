const FooterBottom = () => {
  return (
    <div>
      <p className="border-t-2 border-slate-700"></p>
      <div className="flex justify-between items-center pt-8">
        <p className="text-white">Copyright © 2024 | Allright Reserved</p>
        <div>
          <ul className="flex gap-8 text-white text-base">
            <li>
              <a href="#">Beranda</a>
            </li>
            <li>
              <a href="#">Penginapan</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
