import { Link, useLocation, useNavigate } from "react-router-dom";
import MainLayout from "../../layout/Mainlayout";

const PrenagcyData = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state?.data as PemeriksaanBayi;

  const colorText = () => {
    if (userData.statusKehamilan == "baik") {
      return "text-green";
    } else if (userData.statusKehamilan == "lemah") {
      return "text-yellow";
    }

    return "text-red";
  };
  return (
    <MainLayout>
      <section>
        <h1 className="font-semibold text-4xl text-center">Data Kehamilan</h1>

        <div className="mt-8">
          <h1 className="font-semibold text-2xl">Detail Pemeriksaan</h1>
          <h3 className="font-medium text-xl my-4">
            Tanggal Pemeriksaan: {userData.tanggalPemeriksaan}
          </h3>
          <h3 className="font-medium text-xl">
            Diperiksa Oleh: {userData.namaPemeriksa}
          </h3>
        </div>

        <div className="mt-8">
          <h1 className="font-semibold text-2xl">Hasil Pemeriksaan</h1>
          <h3 className="font-medium text-xl mt-5">
            Usia Kandungan: {userData.usiaKandungan}
          </h3>
          <h3 className="font-medium text-xl mt-5">
            Tekanan Darah: {userData.tekananDarah}
          </h3>
          <h3 className="font-medium text-xl mt-5">
            Berat Badan Ibu: {userData.beratBadanIbu}
          </h3>
          <h3 className="font-medium text-xl mt-5">
            Status Kehamilan:{" "}
            <span className={`${colorText()}`}>{userData.statusKehamilan}</span>
          </h3>

          <h3 className="font-medium text-xl mt-5">
            Pesan Tambahan: {userData.pesanTambahan}
          </h3>
        </div>

        <div className="flex flex-col md:flex-row my-8 w-full gap-4  items-center">
          <button
            onClick={() => navigate(-1)}
            className="w-full md:w-[50%] h-[46px] bg-transparent  text-ms text-orange font-semibold py-2 px-4 border border-border-grey rounded-lg"
          >
            Kembali
          </button>
          <Link
            to={"/inputPrenagcyData"}
            className=" w-full md:w-[50%] h-[46px]"
          >
            <button
              type="button"
              className=" bg-orange  text-white  rounded-lg block text-ms font-semibold w-full h-full  "
            >
              Ubah Data Kehamilan
            </button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};
export default PrenagcyData;
