const ListPenginapan = () => {
  return (
    <div className="flex gap-4 mt-10">
      <div className="flex flex-col gap-3">
        <img
          className="rounded-3xl shadow-lg border border-r-8 border-b-8 border-black"
          src="/img/penginapan1.png"
        />
        <h5 className="text-xl font-medium">Nama Penginapan</h5>
        <div className="flex gap-2 items-center">
          <img src="/img/icon-lokasi.svg" />
          <p>Alamat Penginapan</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <img
          className="rounded-3xl shadow-lg border border-r-8 border-b-8 border-black"
          src="/img/penginapan1.png"
        />
        <h5 className="text-xl font-medium">Nama Penginapan</h5>
        <div className="flex gap-2 items-center">
          <img src="/img/icon-lokasi.svg" />
          <p>Alamat Penginapan</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <img
          className="rounded-3xl shadow-lg border border-r-8 border-b-8 border-black"
          src="/img/penginapan1.png"
        />
        <h5 className="text-xl font-medium">Nama Penginapan</h5>
        <div className="flex gap-2 items-center">
          <img src="/img/icon-lokasi.svg" />
          <p>Alamat Penginapan</p>
        </div>
      </div>
    </div>
  );
};

export default ListPenginapan;
