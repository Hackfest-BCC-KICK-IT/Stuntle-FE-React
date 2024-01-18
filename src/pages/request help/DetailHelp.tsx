import { useLocation } from "react-router-dom";
import MainLayout from "../../layout/Mainlayout";
import ProsesHelp from "./components/ProsesHelp";
import DeclineHelp from "./components/DeclineHelp";
import AcceptHelp from "./components/AcceptHelp";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../../components/Loader";

const DetailHelp = () => {
  const location = useLocation();
  const title = location.state?.title;
  const item = location.state?.item;
  let nameOrtu = "";

  const [userData] = useLocalStorage("user");
  const [isLoading, data, , , isSuccess] = useFetch<{
    data: { namaIbu: string };
  }>(
    {
      method: "GET",
      url: `/orangtua/${item.fkOrtuId}`,
      headers: {
        Authorization: `Bearer ${userData.jwtToken} `,
      },
    },
    true
  );

  if (isSuccess) {
    nameOrtu = data?.data.namaIbu || "";
  }

  const childComponent = () => {
    if (title == "Perlu Diproses") {
      return <ProsesHelp item={item} />;
    } else if (title == "Diterima") {
      return <AcceptHelp item={item} />;
    }
    return <DeclineHelp item={item} />;
  };

  return (
    <MainLayout>
      <h1 className="heading1 text-center">Permintaan Bantuan {title}</h1>
      <h2 className="heading1 mt-8"> Detail Permintaan Bantuan</h2>
      <p className="mt-4 text-lg font-medium">Nama Pengaju: {nameOrtu}</p>
      {isLoading ? <Loader /> : childComponent()}
    </MainLayout>
  );
};
export default DetailHelp;
