import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../../layout/Mainlayout";

const ChildData = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <section>
        <h1 className="font-semibold text-4xl text-center">Data Anak Ke-1</h1>

        <div className="mt-8">
          <h1 className="font-semibold text-2xl">Detail Pemeriksaan</h1>
          <h3 className="font-medium text-base my-4">
            Tanggal Pemeriksaan: 18 Okt 2023
          </h3>
          <h3 className="font-medium text-base my-4">
            Tempat Pemeriksaan: Puskesmas Lumut
          </h3>
          <h3 className="font-medium text-base">Diperiksa Oleh: Dr. Sumiati</h3>
        </div>

        <div className="mt-8">
          <h1 className="font-semibold text-2xl">Hasil Pemeriksaan</h1>
          <h3 className="font-medium text-base mt-5">Umur Anak: 2 Tahun</h3>
          <h3 className="font-medium text-base mt-5">Tinggi Anak: 88 cm</h3>
          <h3 className="font-medium text-base mt-5">
            Berat Badan Anak: 12 kg
          </h3>
          <h3 className="font-medium text-base mt-5">
            Status Kehamilan: <span className="text-green">Baik</span>
          </h3>

          <h3 className="font-medium text-base mt-5">
            Pesan Tambahan: Jaga pola makannya ya bunda biar anaknya tetap sehat
          </h3>
        </div>

        <div className="flex flex-row my-8 w-full gap-4  items-center">
          <button
            onClick={() => navigate(-1)}
            className=" w-[50%] h-[46px] bg-transparent  text-ms text-orange font-semibold py-2 px-4 border border-border-grey rounded-lg"
          >
            Kembali
          </button>
          <Link to={"/inputChildData"} className="w-[50%] h-[46px]">
            <button
              type="button"
              className=" bg-orange  text-white  rounded-lg block text-ms font-semibold w-full h-full  "
            >
              Ubah Data Pemeriksaan
            </button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};
export default ChildData;
