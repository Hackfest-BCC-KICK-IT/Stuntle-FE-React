import { Link, useLocation } from "react-router-dom";
import MainLayout from "../../../layout/Mainlayout";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { useFetch } from "../../../hooks/useFetch";
import Loader from "../../../components/Loader";
import StatusPemeriksaan from "./StatusPemeriksaan";

const ProfilBayi = () => {
  let listData: PemeriksaanBayi[] = [];
  const location = useLocation();
  const dataKehamilan = location.state?.data as DataKehamilan;
  const idOrtu = location.state?.id as number;
  const [userData] = useLocalStorage("user");
  const [isLoading, data, , , isSuccess] = useFetch<{
    data: PemeriksaanBayi[];
  }>(
    {
      method: "GET",
      url: `/pemeriksaan/kehamilan?id=${idOrtu}&data_kehamilan_id=${dataKehamilan.id}&page=0&limit=10`,
      headers: {
        Authorization: `Bearer ${userData.jwtToken} `,
      },
    },
    true
  );

  if (isSuccess) {
    listData = data?.data || [];
  }

  if (isLoading) {
    return (
      <MainLayout>
        <Loader />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className=" mt-[35px] ">
        {/*Headline Text */}
        <div>
          <h1 className="font-semibold text-2xl">Profil Calon Bayi</h1>
          <h3 className="font-medium text-sm mt-5">
            Nama Calon Bayi: {dataKehamilan.namaCalonBayi}
          </h3>
          <h3 className="font-medium text-sm mt-5">
            Hari Pertama Haid Terakhir:{" "}
            {dataKehamilan.tanggalPertamaHaid ?? "27 Febuari 2023"}
          </h3>
          <h3 className="font-medium text-sm mt-5">
            Prediksi Tanggal Kelahiran:{" "}
            {dataKehamilan.prediksiTanggalLahir ?? "3 Januari 2024"}
          </h3>
          <h3 className="font-medium text-sm mt-5">
            Usia Kehamilan: {dataKehamilan.usiaKehamilan ?? "4 Bulan"}
          </h3>
        </div>

        {/* Data Kehamilan Section */}
        <h1 className="font-semibold text-2xl mt-9">Data Kehamilan</h1>

        <Link
          to={"/inputPrenagcyData"}
          state={{ idOrtu: idOrtu, idBayi: dataKehamilan.id }}
        >
          <button
            type="button"
            className="my-5 bg-orange text-white rounded-lg block text-sm font-semibold w-[60%] h-11"
          >
            Tambahkan Data Kehamilan
          </button>
        </Link>

        {listData.length > 0 ? (
          <>
            {listData.map((item, index) => (
              <StatusPemeriksaan
                key={index}
                data={item}
                index={index}
                id={idOrtu}
              />
            ))}
          </>
        ) : (
          <div className="my-5">
            <p className="text-base font-bold">Belum ada data pemeriksaan</p>
          </div>
        )}

        <button className=" w-full md:w-[60%] h-[46px] bg-transparent  text-ms text-orange font-semibold py-2 px-4 border border-orange rounded-lg">
          Hapus Data & Profil Kehamilan
        </button>
      </section>
    </MainLayout>
  );
};
export default ProfilBayi;
