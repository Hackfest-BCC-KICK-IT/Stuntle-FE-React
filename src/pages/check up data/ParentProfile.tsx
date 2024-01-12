import { useState } from "react";
import AddPrenagcyData from "../../components/AddPrenagcyData";
import AddChildData from "../../components/AddChildData";
import MainLayout from "../../layout/Mainlayout";

const ParentProfile = () => {
  const [activeTab, setActiveTab] = useState("dataKehamilan");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <MainLayout>
      <section className="overflow-y-hidden">
        {/* Heading Page */}
        <div>
          <h1 className="font-semibold text-2xl">Profil Orang Tua</h1>
          <h3 className="font-medium text-sm my-4">
            Nama Ibu: Nasrah Hayati Fitri
          </h3>
          <h3 className="font-medium text-sm">
            Nama Ayah: Muhammad Harizal Fikri
          </h3>
        </div>

        <ul className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0">
          <li role="presentation">
            <button
              onClick={() => handleTabClick("dataKehamilan")}
              className={`my-2 block border-x-0 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium leading-tight ${
                activeTab === "dataKehamilan"
                  ? "text-orange border-b-2 "
                  : "border-b-0 text-grey "
              }`}
            >
              Data Kehamilan
            </button>
          </li>
          <li role="presentation">
            <button
              onClick={() => handleTabClick("dataAnak")}
              className={`my-2 block focus:border-b-2 border-b-0 focus:text-orange text-grey border-x-0 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium leading-tight ${
                activeTab === "dataAnak"
                  ? "text-orange border-b-2 "
                  : "border-b-0 text-grey "
              }`}
            >
              Data Anak
            </button>
          </li>
        </ul>

        <div>
          {activeTab === "dataKehamilan" && <AddPrenagcyData />}
          {activeTab === "dataAnak" && <AddChildData />}
        </div>
      </section>
    </MainLayout>
  );
};

export default ParentProfile;
