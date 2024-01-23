import { Link } from "react-router-dom";
import Arrow from "../../../assets/Arrow";

interface StatusPemeriksaanAnakProps {
  data: PemeriksaanAnak;
  index: number;
  id: number;
}

const StatusPemeriksaanAnak = ({
  data,
  index,
  id,
}: StatusPemeriksaanAnakProps) => {
  const colorText = () => {
    if (data.statusAnak == "baik") {
      return "text-green";
    } else if (data.statusAnak == "berpotensi") {
      return "text-yellow";
    }

    return "text-red";
  };
  return (
    <div className="flex justify-between flex-row w-[60%] h-[70px] my-5 border border-border-grey border-solid rounded-lg py-4 px-6  ">
      <div className="flex flex-col">
        <h2 className="font-semibold ">Pemeriksaan - {index + 1}</h2>
        <h4>
          Status Gizi Anak:{" "}
          <span className={`${colorText()}`}>{data.statusAnak}</span>
        </h4>
      </div>
      <Link to={"/childData"} state={{ data: data, id: id }} className="p-1">
        <Arrow />
      </Link>
    </div>
  );
};
export default StatusPemeriksaanAnak;
