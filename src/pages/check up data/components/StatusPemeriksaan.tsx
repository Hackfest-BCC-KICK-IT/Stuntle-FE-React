import { Link } from "react-router-dom";
import Arrow from "../../../assets/Arrow";

interface StatusBaikProps {
  data: PemeriksaanBayi;
  index: number;
  id: number;
}

const StatusPemeriksaan = ({ data, index, id }: StatusBaikProps) => {
  const colorText = () => {
    if (data.statusKehamilan == "baik") {
      return "text-green";
    } else if (data.statusKehamilan == "lemah") {
      return "text-yellow";
    }

    return "text-red";
  };
  return (
    <div className="flex justify-between flex-row md:w-[60%]  my-5 border border-border-grey border-solid rounded-lg py-4 px-6  ">
      <div className="flex flex-col">
        <h2 className="font-semibold ">Pemeriksaan - {index + 1}</h2>
        <h4>
          Status Kehamilan:{" "}
          <span className={`${colorText()}`}>{data.statusKehamilan}</span>
        </h4>
      </div>

      <Link to={"/prenagcyData"} state={{ data: data, id: id }} className="p-1">
        <Arrow />
      </Link>
    </div>
  );
};
export default StatusPemeriksaan;
