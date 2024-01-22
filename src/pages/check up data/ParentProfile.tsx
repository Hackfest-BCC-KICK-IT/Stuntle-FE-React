import { useState } from "react";
import AddPrenagcyData from "../../components/AddPrenagcyData";
import AddChildData from "../../components/AddChildData";
import MainLayout from "../../layout/Mainlayout";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useFetch } from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import Loader from "../../components/Loader";

interface ProfileOrtu {
  id: number;
  namaIbu: string;
  nomorTelepon: string | null;
  namaAyah: string | null;
  email: string;
}

const ParentProfile = () => {
  const location = useLocation();
  const idOrtu = location.state?.id;
  const [activeTab, setActiveTab] = useState("dataKehamilan");
  const [userData] = useLocalStorage("user");
  const [isLoading, data, , ,] = useFetch<{
    data: ProfileOrtu;
  }>(
    {
      method: "GET",
      url: `/orangtua/${idOrtu}`,
      headers: {
        Authorization: `Bearer ${userData.jwtToken} `,
      },
    },
    true
  );

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <MainLayout>
      <section className="overflow-y-hidden">
        {/* Heading Page */}
        <div>
          <h1 className="font-semibold text-2xl">Profil Orang Tua</h1>
          {isLoading ? (
            <div className="my-5">
              <Loader />
            </div>
          ) : (
            <>
              <h3 className="font-medium text-sm mt-4 ">
                Nama Ibu: {data?.data.namaIbu}
              </h3>
              <h3 className="font-medium text-sm my-4">
                Nama Ayah: {data?.data.namaAyah ?? "Belum Di isi"}
              </h3>
              <h3 className="font-medium text-sm">
                Nomor Telepon: {data?.data.nomorTelepon ?? "Belum di isi"}{" "}
              </h3>
            </>
          )}
        </div>

        <ul className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0">
          <li role="presentation">
            <button
              onClick={() => handleTabClick("dataKehamilan")}
              className={`my-2 block border-x-0 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium leading-tight ${
                activeTab === "dataKehamilan"
                  ? "text-orange border-b-2 border-b-orange "
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
                  ? "text-orange border-b-2 border-b-orange "
                  : "border-b-0 text-grey "
              }`}
            >
              Data Anak
            </button>
          </li>
        </ul>

        <div>
          {activeTab === "dataKehamilan" && <AddPrenagcyData id={idOrtu} />}
          {activeTab === "dataAnak" && <AddChildData />}
        </div>
      </section>
    </MainLayout>
  );
};

export default ParentProfile;
