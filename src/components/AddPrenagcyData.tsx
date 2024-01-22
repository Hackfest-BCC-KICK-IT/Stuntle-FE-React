import useLocalStorage from "../hooks/useLocalStorage";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import { Link } from "react-router-dom";

interface AddPregnancyDataProps {
  id: number;
}

const AddPrenagcyData = ({ id }: AddPregnancyDataProps) => {
  const [userData] = useLocalStorage("user");
  const [isLoading, data, , ,] = useFetch<{
    data: DataKehamilan[];
  }>(
    {
      method: "GET",
      url: `/kehamilan/faskes/list?id=${id}&page=0&limit=10`,
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
          <p className="mb-2 sm:mb-0 sm:mr-4">{item.namaCalonBayi}</p>

          <Link to={"/profilCalonBayi"} state={{ data: item, id: id }}>
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
export default AddPrenagcyData;
