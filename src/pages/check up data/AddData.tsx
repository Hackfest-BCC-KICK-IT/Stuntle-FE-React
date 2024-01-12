import { Link } from "react-router-dom";
import SearchIcon from "../../assets/SearchIcon";
import MainLayout from "../../layout/Mainlayout";

const AddData = () => {
  return (
    <MainLayout>
      <section>
        <h1 className="font-semibold text-2xl text-black mb-5">
          Cari Nama Orang Tua Untuk Menambahkan Data Hasil Pemeriksaan
        </h1>

        <form className="mb-5">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="search"
              id="search"
              className="block w-full text-clip p-4 pl-10 text-sm text-gray-900 border  border-border-grey rounded-lg bg-gray-50"
              placeholder="Cari Nama Lengkap Ibu Atau Ayah Dari Bayi Atau Anak Disini"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 font-semibold bg-orange focus:ring-4 focus:outline-none rounded-lg text-sm px-4 py-2"
            >
              Cari
            </button>
          </div>
        </form>

        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="my-3 py-2 px-4 border border-border-grey rounded-lg flex flex-col sm:flex-row justify-between items-center"
          >
            <p className="mb-2 sm:mb-0 sm:mr-4">
              Nasrah Hayati Fitri / Muhammad Harizal Fikri
            </p>
            <Link to={"/parentProfile"}>
              <button
                type="button"
                className="text-light-violet outline-none mt-2 sm:mt-0"
              >
                Lihat Profile
              </button>
            </Link>
          </div>
        ))}
      </section>
    </MainLayout>
  );
};

export default AddData;
