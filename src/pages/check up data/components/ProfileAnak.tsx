import { Link, useLocation } from "react-router-dom";
import MainLayout from "../../../layout/Mainlayout";
import StatusPemeriksaanAnak from "./StatusPemeriksaanAnak";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { useFetch } from "../../../hooks/useFetch";
import Loader from "../../../components/Loader";

const ProfileAnak = () => {
  let listData: PemeriksaanAnak[] = [];
  const location = useLocation();
  const dataAnak = location.state?.data as DataAnak;
  const idOrtu = location.state?.id as number;
  const [userData] = useLocalStorage("user");
  const [isLoading, data, , , isSuccess] = useFetch<{
    data: PemeriksaanAnak[];
  }>(
    {
      method: "GET",
      url: `/pemeriksaan/anak`,
      params: {
        id: idOrtu,
        data_anak_id: dataAnak.id,
        page: 0,
        limit: 10,
      },
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
          <h1 className="font-semibold text-2xl">Profil Anak</h1>
          <h3 className="font-medium text-base mt-5">
            Nama Anak: {dataAnak.namaAnak}
          </h3>
          <h3 className="font-medium text-base mt-5">
            Tanggal Lahir Anak: {dataAnak.tanggalLahir}
          </h3>
          <h3 className="font-medium text-base mt-5">
            Usia Anak Saat Ini: {dataAnak.usiaAnak}
          </h3>
          <h3 className="font-medium text-base mt-5">
            Jenis Kelamin Anak: {dataAnak.jenisKelamin}
          </h3>
          <h3 className="font-medium text-base mt-5">
            Kondisi Lahir: {dataAnak.kondisiLahir}
          </h3>
          <h3 className="font-medium text-base mt-5">
            Berat Badan Lahir: {dataAnak.beratBadanLahir}
          </h3>
          <h3 className="font-medium text-base mt-5">
            Panjang Badan Lahir: {dataAnak.panjangBadanLahir}
          </h3>
          <h3 className="font-medium text-base mt-5">
            Lingkar Kepala : {dataAnak.lingkarKepala}
          </h3>
        </div>

        {/* Data Kehamilan Section */}
        <h1 className="font-semibold text-2xl mt-9">Data Anak </h1>

        <Link
          to={"/inputChildData"}
          state={{ idOrtu: idOrtu, idAnak: dataAnak.id }}
        >
          <button
            type="button"
            className="my-5 bg-orange text-white rounded-lg block text-base font-semibold w-[60%] h-11"
          >
            Tambahkan Data Anak
          </button>
        </Link>

        {listData.length > 0 ? (
          <>
            {listData.map((item, index) => (
              <StatusPemeriksaanAnak
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
          Hapus Data & Profil Anak
        </button>
      </section>
    </MainLayout>
  );
};
export default ProfileAnak;
