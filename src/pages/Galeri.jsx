const Galeri = () => {
  return (
    <div className="py-16">
      <h1 className="py-16 text-6xl font-bold text-center uppercase">
        Galeri Kami
      </h1>
      <div className="grid grid-cols-4 auto-rows-[300px] gap-4 mx-auto px-16">
        <img src="/img/galeri/1.png" className="col-span-2 rounded-2xl" />
        <img src="/img/galeri/2.png" className="rounded-2xl" />
        <img src="/img/galeri/3.png" className="row-span-2 rounded-2xl" />
        <img src="/img/galeri/4.png" className="rounded-2xl" />
        <img src="/img/galeri/5.png" className="rounded-2xl col-span-2" />
        <img src="/img/galeri/6.png" className="row-span-2 rounded-2xl" />
        <img src="/img/galeri/7.png" className="rounded-2xl" />
        <img src="/img/galeri/8.png" className="rounded-2xl" />
        <img src="/img/galeri/9.png" className="rounded-2xl" />
        <img src="/img/galeri/10.png" className="rounded-2xl col-span-3" />
      </div>
    </div>
  );
};

export default Galeri;
