import { Link } from "react-router-dom";
import MainLayout from "../../layout/Mainlayout";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import useLocalStorage from "../../hooks/useLocalStorage";

interface GrupData {
  id: number;
  namaGrup: string;
  linkGrup: string;
}

const WaGruop = () => {
  let listGrup: GrupData[] = [];
  const [userData] = useLocalStorage("user");
  const [isLoading, data, , , isSuccess] = useFetch<{
    data: GrupData[];
  }>(
    {
      method: "GET",
      url: "/whatsapp/faskes?limit=10&page=0",
      headers: {
        Authorization: `Bearer ${userData.jwtToken} `,
      },
    },
    true
  );

  if (isSuccess) {
    listGrup = data?.data || [];
  }

  return (
    <MainLayout>
      <section>
        <h1 className="heading1 mb-5">List Link Grup Whatsapp</h1>
        <Link to={"/addDetailWaGruop"} className="w-full">
          <button
            type="button"
            disabled={isLoading}
            className="bg-orange text-white rounded-lg block text-ms font-semibold w-full h-[46px]"
          >
            {isLoading ? <Loader /> : "Tambahkan Link Grup Whatsapp"}
          </button>
        </Link>

        {listGrup.map((item, index) => (
          <div
            key={index}
            className="my-3 py-3 px-4 border border-border-grey rounded-lg flex flex-row justify-between"
          >
            <p>{item.namaGrup}</p>
            <Link to={"/detailWaGruop"} state={{ grup: item }}>
              <button type="button" className="text-light-violet outline-none">
                Lihat Detail
              </button>
            </Link>
          </div>
        ))}
      </section>
    </MainLayout>
  );
};

export default WaGruop;
