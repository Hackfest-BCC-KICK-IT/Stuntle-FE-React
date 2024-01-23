import { HomepageDataPrenangcy } from "../../../constant/homepage";
import BoxItem from "./BoxItem";

interface DashboardIbuProsp {
  data: number[];
}

const DashboardIbu = ({ data }: DashboardIbuProsp) => {
  return (
    <div>
      <h2 className="heading1 mt-10 mb-2">Dashboard Ibu Hamil</h2>
      <div className=" flex flex-rown flex-wrap gap-4">
        {HomepageDataPrenangcy.map((item, index) => {
          const dataAngka = data[index] ?? item.data;
          return <BoxItem key={index} data={dataAngka} title={item.subtitle} />;
        })}
      </div>
    </div>
  );
};
export default DashboardIbu;
