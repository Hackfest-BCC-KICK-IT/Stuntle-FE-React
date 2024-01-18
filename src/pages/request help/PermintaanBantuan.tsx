import { Link } from "react-router-dom";
import MainLayout from "../../layout/Mainlayout";

const PermintaanBantuan = () => {
  return (
    <MainLayout>
      <section className="ml-[20px] mt-[35px] mr-[20px]">
        <h1 className="heading1 mb-5">Menu Permintaan Bantuan </h1>
        <Link
          to={"/listHelp"}
          state={{ type: "diproses" }}
          className="h-[70px] w-full bg-light-yellow rounded-lg flex justify-between items-center px-5"
        >
          <p className="font-bold text-sm md:text-2xl text-yellow">
            List Permintaan <br className="md:hidden" /> Bantuan Perlu Diproses
          </p>
          <p className="font-semibold text-sm text-yellow cursor-pointer mr-1">
            Lihat List
          </p>
        </Link>
        <Link
          to={"/listHelp"}
          state={{ type: "sukses" }}
          className="h-[70px] my-4 w-full bg-light-green rounded-lg flex justify-between items-center px-5"
        >
          <p className="font-bold text-sm md:text-2xl text-green ">
            List Permintaan <br className="md:hidden" /> Bantuan Diterima
          </p>
          <p className="font-semibold text-sm text-green cursor-pointer mr-1">
            Lihat List
          </p>
        </Link>
        <Link
          to={"/listHelp"}
          state={{ type: "gagal" }}
          className="h-[70px] my-4 w-full bg-light-red rounded-lg flex justify-between items-center px-5"
        >
          <p className="font-bold  text-sm md:text-2xl text-red ">
            List Permintaan <br className="md:hidden" /> Bantuan Ditolak
          </p>
          <p className="font-semibold text-sm text-red cursor-pointer mr-1">
            Lihat List
          </p>
        </Link>
      </section>
    </MainLayout>
  );
};
export default PermintaanBantuan;
