const Timeline = () => {
  return (
    <div className="antialiased bg-gray-100 text-gray-800 py-16">
      <div className="relative container mx-auto px-6 flex flex-col space-y-8">
        <div className="absolute z-0 w-2 h-full bg-black dashed shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
        <div className="relative z-10">
          <div className="timeline-circle linear-gradient mt-3"></div>
          <div className="timeline-container">
            <div className="timeline-pointer" aria-hidden="true"></div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <div className="flex items-center gap-8">
                <h1 className="w-[110px] text-3xl text-center font-bold">
                  Jum'at 12 Juli
                </h1>
                <div>
                  <p>1. Bersih Desa dan Kenduri</p>
                  <p>2. Penanaman Pohon dan Senam Masal</p>
                  <p>3. Gelar Seni Budaya 28 Desa Wisata</p>
                  <p>4. Serang Bersholawat</p>
                  <p>5. Kampung UMKM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10">
          <div className="timeline-circle linear-gradient mt-3"></div>
          <div className="timeline-container timeline-container-left">
            <div
              className="timeline-pointer timeline-pointer-left"
              aria-hidden="true"></div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <div className="flex items-center gap-8">
                <h1 className="w-[110px] text-3xl text-center font-bold">
                  Sabtu 13 Juli
                </h1>
                <div>
                  <p>1. Pengambilan Air Sikopyah </p>
                  <p>2. Serang Carnival</p>
                  <p>3. Kirab Gunungan</p>
                  <p>4. Pagelaran Seni Budaya Lingkar Slamet</p>
                  <p>5. Akustik Kabut Lembut “Artis Ibukota”</p>
                  <p>6. Kampung UMKM”</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10">
          <div className="timeline-circle linear-gradient mt-3"></div>
          <div className="timeline-container">
            <div className="timeline-pointer" aria-hidden="true"></div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <div className="flex items-center gap-8">
                <h1 className="w-[110px] text-3xl text-center font-bold">
                  Minggu 14 Juli
                </h1>
                <div>
                  <p>1. Perang Tomat</p>
                  <p>2. Live Musik</p>
                  <p>3. Kampung UMKM</p>
                  <p>4. Penutup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
