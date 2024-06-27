const Poster = () => {
  return (
    <div className="bg-slate-900 flex py-16 px-32 gap-16">
      <img
        src="/img/poster.png"
        className="rounded-3xl shadow-lg border border-r-8 border-b-8 border-black"
      />
      <div className="flex flex-col justify-center">
        <h4 className="text-2xl font-semibold text-slate-500">
          Kami Hadir Kembali!
        </h4>
        <h1 className="w-[500px] text-7xl font-bold pt-2 text-white leading-tight">
          Festival Gunung Slamet 2024
        </h1>
      </div>
    </div>
  );
};

export default Poster;
