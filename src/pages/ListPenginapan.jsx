import ButtonPenginapan from "../components/penginapan/ButtonPenginapan";
import JudulPenginapan from "../components/penginapan/JudulPenginapan";
import ListPenginapan from "../components/penginapan/ListPenginapan";

const Penginapan = () => {
  return (
    <div className="bg-slate-200 py-16 px-16">
      <JudulPenginapan />
      <ListPenginapan />
      <ButtonPenginapan />
    </div>
  );
};

export default Penginapan;
