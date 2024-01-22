import { Link } from "react-router-dom";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { useFetch } from "../../../hooks/useFetch";
import Loader from "../../../components/Loader";

interface DataOrtu {
  id: number;
  fkOrtuId: number;
  fkFaskesId: number;
  namaAyah: string;
  namaIbu: string;
}

const ListOrtu = () => {
  let listData: DataOrtu[] = [];
  const [userData] = useLocalStorage("user");

  // consume api
  const [isLoading, data, , , isSuccess] = useFetch<{
    data: DataOrtu[];
  }>(
    {
      method: "GET",
      url: "/ortu/faskes?page=0&limit=10",
      headers: {
        Authorization: `Bearer ${userData.jwtToken} `,
      },
    },
    true
  );
  if (isLoading) {
    return <Loader />;
  }
  if (isSuccess) {
    listData = data?.data || [];
  }
  return (
    <>
      {listData &&
        listData.map((item, index) => (
          <div
            key={index}
            className="my-3 py-2 px-4 border border-border-grey rounded-lg flex flex-col sm:flex-row justify-between items-center"
          >
            <p className="mb-2 sm:mb-0 sm:mr-4">
              {`${item.namaIbu} / ${item.namaAyah}`}
            </p>
            <Link to={"/parentProfile"} state={{ id: item.fkOrtuId }}>
              <button
                type="button"
                className="text-light-violet outline-none mt-2 sm:mt-0"
              >
                Lihat Profile
              </button>
            </Link>
          </div>
        ))}
    </>
  );
};
export default ListOrtu;
