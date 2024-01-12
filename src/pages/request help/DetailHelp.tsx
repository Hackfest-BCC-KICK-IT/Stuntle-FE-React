import { Link, useLocation, useNavigate } from "react-router-dom";
import MainLayout from "../../layout/Mainlayout";

//TODO: Perbaiki kodingan ini nanti

const DetailHelp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.title;

  if (data == "Perlu Diproses") {
    return (
      <MainLayout>
        <h1 className="heading1 text-center">Permintaan Bantuan {data}</h1>
        <h2 className="heading1 mt-8"> Detail Permintaan Bantuan</h2>
        <div className="w-[70%]">
          <p className="mt-4 text-lg font-medium">
            Tanggal Pengajuan: 18 Okt 2023
          </p>
          <p className="mt-4 text-lg font-medium">
            Judul Pengajuan: Pengajuan Bantuan Mainan Anak Bekas
          </p>
          <p className="mt-4 text-lg font-medium">
            Deskripsi Pengajuan: Halo puskesmas lumut, saya hanifa sedang
            membutuhkan bantuan berupa mainan bekas untuk anak saya karena dia
            sedang membutuhkan mainan dan saya sedang tidak mempunyai uang saat
            ini untuk membelikannya, terima kasih.{" "}
          </p>
          <p className="mt-4 text-lg font-medium">Nama Pengaju: Hanifa</p>
          <p className="mt-4 text-lg font-medium">
            Status Pengajuan: <span className="text-yellow">Diproses</span>
          </p>
        </div>
        <div className=" w-[70%]">
          <h3 className="heading1 mt-8 mb-4">Pesan Tambahan</h3>
          <textarea
            rows={4}
            className="block p-2.5 w-full border border-border-grey text-sm text-black  rounded-lg   "
            placeholder="Tuliskan pesan tambahan kepada orang tua atas respon yang anda berikan, baik menerima maupun menolak permintaan bantuannya"
          />
        </div>
        <div className="flex flex-col md:flex-row my-8 w-full gap-4  items-center">
          <button
            onClick={() => navigate(-1)}
            className="w-full md:w-[50%] h-[46px] bg-transparent  text-ms text-red font-semibold py-2 px-4 border border-border-grey rounded-lg"
          >
            Tolak Permintaan
          </button>
          <Link
            to={"/permintaanBantuan"}
            className=" w-full md:w-[50%] h-[46px]"
          >
            <button
              type="button"
              className=" bg-green  text-white  rounded-lg block text-ms font-semibold w-full h-full  "
            >
              Terima Permintaan
            </button>
          </Link>
        </div>
      </MainLayout>
    );
  } else if (data == "Diterima") {
    return (
      <MainLayout>
        <h1 className="heading1 text-center">Permintaan Bantuan {data}</h1>
        <h2 className="heading1 mt-8"> Detail Permintaan Bantuan</h2>
        <div className="w-[70%]">
          <p className="mt-4 text-lg font-medium">
            Tanggal Pengajuan: 18 Okt 2023
          </p>
          <p className="mt-4 text-lg font-medium">
            Judul Pengajuan: Pengajuan Bantuan Mainan Anak Bekas
          </p>
          <p className="mt-4 text-lg font-medium">
            Deskripsi Pengajuan: Halo puskesmas lumut, saya hanifa sedang
            membutuhkan bantuan berupa mainan bekas untuk anak saya karena dia
            sedang membutuhkan mainan dan saya sedang tidak mempunyai uang saat
            ini untuk membelikannya, terima kasih.{" "}
          </p>
          <p className="mt-4 text-lg font-medium">Nama Pengaju: Hanifa</p>
          <p className="mt-4 text-lg font-medium">
            Status Pengajuan: <span className="text-green">Diterima</span>
          </p>
        </div>
        <div className=" w-[70%]">
          <h3 className="heading1 mt-8 mb-4">Pesan Tambahan</h3>
          <textarea
            rows={4}
            className="block p-2.5 w-full border border-border-grey text-sm text-black  rounded-lg   "
            placeholder="Tuliskan pesan tambahan kepada orang tua atas respon yang anda berikan, baik menerima maupun menolak permintaan bantuannya"
          />
        </div>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className=" bg-orange  text-white my-5  rounded-lg block text-ms font-semibold w-[70%] h-[46px]"
        >
          Kembali
        </button>
      </MainLayout>
    );
  } else {
    return (
      <MainLayout>
        <h1 className="heading1 text-center">Permintaan Bantuan {data}</h1>
        <h2 className="heading1 mt-8"> Detail Permintaan Bantuan</h2>
        <div className="w-[70%]">
          <p className="mt-4 text-lg font-medium">
            Tanggal Pengajuan: 18 Okt 2023
          </p>
          <p className="mt-4 text-lg font-medium">
            Judul Pengajuan: Pengajuan Bantuan Mainan Anak Bekas
          </p>
          <p className="mt-4 text-lg font-medium">
            Deskripsi Pengajuan: Halo puskesmas lumut, saya hanifa sedang
            membutuhkan bantuan berupa mainan bekas untuk anak saya karena dia
            sedang membutuhkan mainan dan saya sedang tidak mempunyai uang saat
            ini untuk membelikannya, terima kasih.{" "}
          </p>
          <p className="mt-4 text-lg font-medium">Nama Pengaju: Hanifa</p>
          <p className="mt-4 text-lg font-medium">
            Status Pengajuan: <span className="text-red">Ditolak</span>
          </p>
        </div>
        <div className=" w-[70%]">
          <h3 className="heading1 mt-8 mb-4">Pesan Tambahan</h3>
          <textarea
            rows={4}
            className="block p-2.5 w-full border border-border-grey text-sm text-black  rounded-lg   "
            placeholder="Tuliskan pesan tambahan kepada orang tua atas respon yang anda berikan, baik menerima maupun menolak permintaan bantuannya"
          />
        </div>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className=" bg-orange  text-white my-5  rounded-lg block text-ms font-semibold w-[70%] h-[46px]"
        >
          Kembali
        </button>
      </MainLayout>
    );
  }
};
export default DetailHelp;
