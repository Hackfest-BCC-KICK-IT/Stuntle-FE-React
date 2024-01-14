import { Link } from "react-router-dom";
import MainLayout from "../../layout/Mainlayout";
import SearchIcon from "../../assets/SearchIcon";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../../components/Loader";

interface MenuRecipes {
  id: number;
  publicId: string;
  urlGambar: string;
  judulResep: string;
  targetResep: string;
  targetUsiaResep: string;
  jenis: string;
  bahanUtama: string;
  durasiMemasak: string;
  bahanText: string;
  caraMembuatText: string;
  nilaiGiziText: string;
  createdAt: string;
}

const MenuRecipes = () => {
  let listRecepies: MenuRecipes[] = [];
  const [userData] = useLocalStorage("user");
  const [isLoading, data, , , isSuccess] = useFetch<{
    data: MenuRecipes[];
  }>(
    {
      method: "GET",
      url: "/resep/makanan?limit=10&page=0",
      headers: {
        Authorization: `Bearer ${userData.jwtToken} `,
      },
    },
    true
  );

  if (isSuccess) {
    listRecepies = data?.data || [];
  }
  return (
    <MainLayout>
      <section>
        <h1 className="font-semibold text-2xl text-black mb-5">
          Menu Resep Makanan
        </h1>

        <Link to={"/addRecipes"} className="w-full">
          <button
            type="button"
            disabled={isLoading}
            className=" bg-orange  text-white my-5  rounded-lg block text-ms font-semibold w-full h-[46px]"
          >
            {isLoading ? <Loader /> : "Upload Artikel Baru Disini"}
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

        {listRecepies.map((item, index) => (
          <div
            key={index}
            className="my-3 py-2 px-4 border border-border-grey rounded-lg flex flex-col sm:flex-row justify-between items-center"
          >
            <p className="mb-2 sm:mb-0 sm:mr-4">{item.judulResep}</p>
            <Link to={"/detailRecipes"} state={{ recepies: item }}>
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
