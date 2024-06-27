const Hero = () => {
  return (
    <div className="top-0 h-full">
      <img src="/img/hero.png" className="w-full" />
      <div className="w-3/4 absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-[80px] font-bold">
          PESONA BUDAYA LOKAL DIBALUR AKUSTIK KABUT LEMBUT
        </h1>
        <button className="mt-10 px-8 py-3 rounded-full linear-gradient border border-black">
          <a href="#about" className="font-semibold text-base text-black">
            Jelajahi Festival
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
