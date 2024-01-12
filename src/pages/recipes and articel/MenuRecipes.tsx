import { Link } from "react-router-dom";
import MainLayout from "../../layout/Mainlayout";
import SearchIcon from "../../assets/SearchIcon";

const MenuRecipes = () => {
  return (
    <MainLayout>
      <section>
        <h1 className="font-semibold text-2xl text-black mb-5">
          Menu Resep Makanan
        </h1>

        <Link to={"/addRecipes"} className="w-full">
          <button
            type="button"
            className=" bg-orange  text-white my-5  rounded-lg block text-ms font-semibold w-full h-[46px]"
          >
            Upload Resep Makanan Baru Disini
          </button>
        </Link>

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
              placeholder="Cari resepmu yang telah kamu upload disini"
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

        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="my-3 py-2 px-4 border border-border-grey rounded-lg flex flex-col sm:flex-row justify-between items-center"
          >
            <p className="mb-2 sm:mb-0 sm:mr-4">Bubur Ayam Sehat Dan Lezat</p>
            <Link to={"/detailRecipes"}>
              <button
                type="button"
                className="text-light-violet outline-none mt-2 sm:mt-0"
              >
                Lihat Resep
              </button>
            </Link>
          </div>
        ))}
      </section>
    </MainLayout>
  );
};
export default MenuRecipes;
