import { Link } from "react-router-dom";
import SearchIcon from "../../assets/SearchIcon";
import MainLayout from "../../layout/Mainlayout";
import { useState } from "react";
import FilterChips from "../../components/FilterChip";

const AddData = () => {
  const [activeTab, setActiveTab] = useState("dataKehamilan");
  const [selectedKondisi, setSelectedKondisi] = useState("Semua Kondisi");
  const [selectedUsia, setSelectedUsia] = useState("Semua Bulan");

  const handleSelectKondisi = (filter: string) => {
    setSelectedKondisi(filter);
  };
  const handleSelecUsia = (filter: string) => {
    setSelectedUsia(filter);
  };

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

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

        <ul className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0">
          <li role="presentation">
            <button
              onClick={() => handleTabClick("semuaData")}
              className={`my-2 block border-x-0 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium leading-tight ${
                activeTab === "semuaData"
                  ? "text-orange  border-b-2 border-b-orange "
                  : "border-b-0 text-grey "
              }`}
            >
              Semua Data
            </button>
          </li>
          <li role="presentation">
            <button
              onClick={() => handleTabClick("dataKehamilan")}
              className={`my-2 block border-x-0 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium leading-tight ${
                activeTab === "dataKehamilan"
                  ? "text-orange border-b-2 border-b-orange "
                  : "border-b-0 text-grey "
              }`}
            >
              Data Kehamilan
            </button>
          </li>
          <li role="presentation">
            <button
              onClick={() => handleTabClick("dataAnak")}
              className={`my-2 block focus:border-b-2 border-b-0 focus:text-orange text-grey border-x-0 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium leading-tight ${
                activeTab === "dataAnak"
                  ? "text-orange border-b-2  border-b-orange"
                  : "border-b-0 text-grey "
              }`}
            >
              Data Anak
            </button>
          </li>
        </ul>

        <div>
          {activeTab === "dataKehamilan" && (
            <div className="my-4 flex flex-col">
              <div className="flex">
                <h2 className="font-bold">Filter Kondisi:</h2>
                <FilterChips
                  selectedFilter={selectedKondisi}
                  filters={["Semua Kondisi", "Baik", "Lemah", "Beresiko"]}
                  onSelectFilter={handleSelectKondisi}
                  filterType="kondisi"
                />
              </div>
              <div className="flex">
                <h2 className="font-bold">Filter Usia:</h2>
                <FilterChips
                  selectedFilter={selectedUsia}
                  filters={[
                    "Semua Bulan",
                    "1-3 Bulan",
                    "4-6 Bulan",
                    "7-9 Bulan",
                    "Di atas 9 Bulan",
                  ]}
                  onSelectFilter={handleSelecUsia}
                  filterType="usia"
                />
              </div>
            </div>
          )}
        </div>

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
