import { HomepageDataChild } from "../../../constant/homepage";
import BoxItem from "./BoxItem";

interface DasboardAnakPorps {
  data: number[];
}

const DasboardAnak = ({ data }: DasboardAnakPorps) => {
  return (
    <>
      <h2 className="heading1 mt-10 mb-2">Dashboard Bayi & Anak</h2>
      <div className=" flex flex-rown flex-wrap gap-4">
        {HomepageDataChild.map((item, index) => {
          const dataAngka = data[index] ?? item.data;
          return <BoxItem key={index} data={dataAngka} title={item.subtitle} />;
        })}
      </div>
    </>
  );
};
export default DasboardAnak;
