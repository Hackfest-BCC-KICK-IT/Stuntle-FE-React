import Loader from "../../components/Loader";
import { useFetch } from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
import MainLayout from "../../layout/Mainlayout";
import DasboardAnak from "./components/DasboardAnak";
import DashboardIbu from "./components/DashboardIbu";
import DashboardUmum from "./components/DashboardUmum";

const Homepage = () => {
  let listUmum: number[] = [];
  let listIbu: number[] = [];
  let listAnak: number[] = [];
  const [userData] = useLocalStorage("user");
  const [isLoading, data, , , isSuccess] = useFetch<{
    data: Record<string, number>;
  }>(
    {
      method: "GET",
      url: "/dashboard",
      headers: {
        Authorization: `Bearer ${userData.jwtToken} `,
      },
      timeout: 60000,
    },
    true
  );

  if (isLoading) {
    return (
      <MainLayout>
        <Loader />
      </MainLayout>
    );
  }

  if (isSuccess) {
    listUmum = data ? Object.values(data?.data).slice(0, 6) : [];
    listIbu = data ? Object.values(data?.data).slice(6, 12) : [];
    listAnak = data ? Object.values(data?.data).slice(12, 18) : [];
  }

  return (
    <MainLayout>
      <section>
        <div>
          <h1 className="heading1">Selamat Datang Di DashBoard Admin</h1>
          <h3 className="text-2xl font-medium my-6">
            Kode Unikmu :{" "}
            <span className="text-light-violet">{userData.data.kodeUnik}</span>
          </h3>
          <h3 className="text-2xl font-medium">
            Sisa Credit Chatbot CATAS:{" "}
            <span className="text-light-violet">Rp 0</span>
          </h3>
        </div>
        {/* Common Data */}
        <div>
          <DashboardUmum data={listUmum} />
        </div>

        {/* Pregnancy Data */}
        <DashboardIbu data={listIbu} />

        {/* Child Data */}
        <DasboardAnak data={listAnak} />
      </section>
    </MainLayout>
  );
};

export default Homepage;
