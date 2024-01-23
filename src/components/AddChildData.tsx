import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";

interface AddChildDataPorps {
  id: number;
}

const AddChildData = ({ id }: AddChildDataPorps) => {
  const [userData] = useLocalStorage("user");
  const [isLoading, data, , ,] = useFetch<{
    data: DataAnak[];
  }>(
    {
      method: "GET",
      url: `/anak/list/faskes?id=${id}&page=0&limit=10`,
      headers: {
        Authorization: `Bearer ${userData.jwtToken} `,
      },
    },
    true
  );
  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <div className="flex flex-col">
      {data?.data.map((item, index) => (
        <div
          key={index}
          className="my-3 py-2 px-4 border border-border-grey rounded-lg flex flex-col sm:flex-row justify-between items-center"
        >
          <p className="mb-2 sm:mb-0 sm:mr-4">{item.namaAnak}</p>

          <Link to={"/profileCalonAnak"} state={{ data: item, id: id }}>
            <button
              type="button"
              className="text-light-violet outline-none mt-2 sm:mt-0"
            >
              Lihat Detail
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default AddChildData;
