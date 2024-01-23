import { HomepageDataUmum } from "../../../constant/homepage";
import BoxItem from "./BoxItem";

interface DashboardUmumProsp {
  data: number[];
}

const DashboardUmum = ({ data }: DashboardUmumProsp) => {
  return (
    <div>
      <h2 className="heading1 mt-10 mb-2">Dashboard Umum</h2>
      <div className=" flex flex-rown flex-wrap gap-4">
        {HomepageDataUmum.map((item, index) => {
          const dataAngka = data[index] ?? item.data;
          return <BoxItem key={index} data={dataAngka} title={item.subtitle} />;
        })}
      </div>
    </div>
  );
};
export default DashboardUmum;
