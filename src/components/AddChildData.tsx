import { Link } from "react-router-dom";
import Arrow from "../assets/Arrow";

const AddChildData = () => {
  return (
    <section className=" mt-[35px] ">
      {/*Headline Text */}
      <div>
        <h1 className="font-semibold text-2xl">Profil Anak Ke-1</h1>
        <h3 className="font-medium text-base mt-5">
          Nama Anak: Nasrah Hayati Fitri
        </h3>
        <h3 className="font-medium text-base mt-5">
          Tanggal Lahir Anak: 10 Oktober 2023
        </h3>
        <h3 className="font-medium text-base mt-5">
          Jenis Kelamin Anak: Laki-Laki
        </h3>
        <h3 className="font-medium text-base mt-5">Kondisi Lahir: Sehat</h3>
        <h3 className="font-medium text-base mt-5">
          Berat Badan Lahir: 3.2 kg
        </h3>
        <h3 className="font-medium text-base mt-5">
          Panjang Badan Lahir: 50 cm
        </h3>
        <h3 className="font-medium text-base mt-5">Lingkar Kepala : 34 cm</h3>
      </div>

      {/* Data Kehamilan Section */}
      <h1 className="font-semibold text-2xl mt-9">Data Anak Ke-1</h1>

      <button
        type="button"
        className="my-5 bg-orange text-white rounded-lg block text-base font-semibold w-[60%] h-11"
      >
        Tambahkan Data Anak
      </button>

      <div className="flex justify-between flex-row w-[60%] h-[70px] my-5 border border-border-grey border-solid rounded-lg py-4 px-6  ">
        <div className="flex flex-col">
          <h2 className="font-semibold ">Pemeriksaan - 3</h2>
          <h4>
            Status Gizi Anak: <span className="text-green">Baik</span>
          </h4>
        </div>
        <Link to={"/childData"} className="p-1">
          <Arrow />
        </Link>
      </div>

      <div className="flex justify-between flex-row w-[60%] h-[70px] my-5 border border-border-grey border-solid rounded-lg py-4 px-6  ">
        <div className="flex flex-col">
          <h2 className="font-semibold ">Pemeriksaan - 2</h2>
          <h4>
            Status Gizi Anak: <span className="text-yellow">Lemah</span>
          </h4>
        </div>
        <Link to={"/childData"} className="p-1">
          <Arrow />
        </Link>
      </div>

      <div className="flex justify-between flex-row w-[60%] h-[70px] my-5 border border-border-grey border-solid rounded-lg py-4 px-6  ">
        <div className="flex flex-col">
          <h2 className="font-semibold ">Pemeriksaan - 1</h2>
          <h4>
            Status Gizi Anak: <span className="text-red">Beresiko</span>
          </h4>
        </div>
        <Link to={"/childData"} className="p-1">
          <Arrow />
        </Link>
      </div>
    </section>
  );
};
export default AddChildData;
