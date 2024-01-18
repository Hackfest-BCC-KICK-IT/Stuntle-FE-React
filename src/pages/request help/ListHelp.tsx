import { Link, useLocation } from "react-router-dom";
import MainLayout from "../../layout/Mainlayout";
import SearchIcon from "../../assets/SearchIcon";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../../components/Loader";

const ListHelp = () => {
  let listData: HelpModel[] = [];
  const location = useLocation();
  const helpType = location.state?.type;
  const [userData] = useLocalStorage("user");
  const [isLoading, data, , , isSuccess] = useFetch<{
    data: HelpModel[];
  }>(
    {
      method: "GET",
      url: `/bantuan/faskes?limit=10&page=0&statusAjuan=${helpType}`,
      headers: {
        Authorization: `Bearer ${userData.jwtToken} `,
      },
    },
    true
  );

  if (isSuccess) {
    listData = data?.data || [];
  }

  //menentukan title text dari helpType halaman sebelumnnnya
  const titleText = () => {
    if (helpType == "diproses") {
      return "Perlu Diproses";
    } else if (helpType == "sukses") {
      return "Diterima";
    }
    return "Ditolak";
  };
  return (
    <MainLayout>
      <section>
        <h1 className="font-semibold text-2xl text-black mb-5">
          List Permintaan Bantuan {titleText()}
        </h1>

        <form className="mb-5">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {isLoading ? <Loader /> : <SearchIcon />}
            </div>
            <input
              type="search"
              id="search"
              className="block w-full text-clip p-4 pl-10 text-sm text-gray-900 border  border-border-grey rounded-lg bg-gray-50"
              placeholder="Cari Nama Lengkap Pengaju Disini"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="text-white absolute right-2.5 bottom-2.5 font-semibold bg-orange focus:ring-4 focus:outline-none rounded-lg text-sm px-4 py-2"
            >
              {isLoading ? "Loading" : "Cari"}
            </button>
          </div>
        </form>

        {listData.length > 0 ? (
          listData.map((item, index) => (
            <div
              key={index}
              className="my-3 py-2 px-4 border border-border-grey rounded-lg flex flex-col sm:flex-row justify-between items-center"
            >
              <p className="mb-2 sm:mb-0 sm:mr-4">Bantuan ke-{index + 1}</p>
              <Link
                to={"/detailHelp"}
                state={{ title: titleText(), item: item }}
              >
                <button
                  type="button"
                  className="text-light-violet outline-none mt-2 sm:mt-0"
                >
                  Lihat Detail
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p>Data Kosong</p>
        )}
      </section>
    </MainLayout>
  );
};
export default ListHelp;
