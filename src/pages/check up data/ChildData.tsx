import { Link, useLocation, useNavigate } from "react-router-dom";
import MainLayout from "../../layout/Mainlayout";

const ChildData = () => {
  const location = useLocation();
  const data = location.state?.data as PemeriksaanAnak;
  const navigate = useNavigate();
  const colorText = () => {
    if (data.statusAnak == "baik") {
      return "text-green";
    } else if (data.statusAnak == "berpotensi") {
      return "text-yellow";
    }

    return "text-red";
  };
  return (
    <MainLayout>
      <section>
        <h1 className="font-semibold text-4xl text-center">Data Anak </h1>

        <div className="mt-8">
          <h1 className="font-semibold text-2xl">Detail Pemeriksaan</h1>
          <h3 className="font-medium text-base my-4">
            Tanggal Pemeriksaan: {data.tanggalPemeriksaan}
          </h3>
          <h3 className="font-medium text-base my-4">
            Tempat Pemeriksaan: {data.tempatPemeriksaan}
          </h3>
          <h3 className="font-medium text-base">
            Diperiksa Oleh: {data.namaPemeriksa}
          </h3>
        </div>

        <div className="mt-8">
          <h1 className="font-semibold text-2xl">Hasil Pemeriksaan</h1>
          <h3 className="font-medium text-base mt-5">
            Umur Anak: {data.umurAnak}
          </h3>
          <h3 className="font-medium text-base mt-5">
            Tinggi Anak: {data.tinggiAnak}
          </h3>
          <h3 className="font-medium text-base mt-5">
            Berat Badan Anak: {data.beratBadanAnak}
          </h3>
          <h3 className="font-medium text-base mt-5">
            Status Kehamilan:{" "}
            <span className={`${colorText()}`}>{data.statusAnak}</span>
          </h3>

          <h3 className="font-medium text-base mt-5">
            Pesan Tambahan: {data.pesanTambahan}
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
