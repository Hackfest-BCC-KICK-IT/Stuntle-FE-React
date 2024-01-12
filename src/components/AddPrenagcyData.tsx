import { Link } from "react-router-dom";
import Arrow from "../assets/Arrow";

const AddPrenagcyData = () => {
  return (
    <section className=" mt-[35px] ">
      {/*Headline Text */}
      <div>
        <h1 className="font-semibold text-2xl">Profil Calon Bayi</h1>
        <h3 className="font-medium text-sm mt-5">
          Nama Calon Bayi: Nasrah Hayati Fitri
        </h3>
        <h3 className="font-medium text-sm mt-5">
          Hari Pertama Haid Terakhir: 10 Oktober 2021
        </h3>
        <h3 className="font-medium text-sm mt-5">
          Prediksi Tanggal Kelahiran: 3 Juli 2022
        </h3>

        {/* Data Kehamilan Section */}
        <h1 className="font-semibold text-2xl mt-9">Data Kehamilan</h1>

        <button
          type="button"
          className="my-5 bg-orange text-white rounded-lg block text-sm font-semibold w-[60%] h-11"
        >
          Tambahkan Data Kehamilan
        </button>

        <div className="flex justify-between flex-row md:w-[60%]  my-5 border border-border-grey border-solid rounded-lg py-4 px-6  ">
          <div className="flex flex-col">
            <h2 className="font-semibold ">Pemeriksaan - 3</h2>
            <h4>
              Status Kehamilan: <span className="text-green">Baik</span>
            </h4>
          </div>
          <Link to={"/prenagcyData"} className="p-1">
            <Arrow />
          </Link>
        </div>

        <div className="flex justify-between flex-row md:w-[60%]  my-5 border border-border-grey border-solid rounded-lg py-4 px-6  ">
          <div className="flex flex-col">
            <h2 className="font-semibold ">Pemeriksaan - 2</h2>
            <h4>
              Status Kehamilan: <span className="text-yellow">Lemah</span>
            </h4>
          </div>
          <Link to={"/prenagcyData"} className="p-1">
            <Arrow />
          </Link>
        </div>

        <div className="flex justify-between flex-row md:w-[60%] my-5 border border-border-grey border-solid rounded-lg py-4 px-6  ">
          <div className="flex flex-col">
            <h2 className="font-semibold ">Pemeriksaan - 1</h2>
            <h4>
              Status Kehamilan: <span className="text-red">Beresiko</span>
            </h4>
          </div>
          <Link to={"/prenagcyData"} className="p-1">
            <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default AddPrenagcyData;
