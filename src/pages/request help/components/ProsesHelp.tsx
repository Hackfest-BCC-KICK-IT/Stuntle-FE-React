import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { useFetch } from "../../../hooks/useFetch";
import { useState } from "react";
import Loader from "../../../components/Loader";

//todo: entah kenapa ini perlu 2 kali di klick agar bisa berjalan dalam mengirimkan data statusAjuan
// statusAjuan tidak bisa secara realtime updatenyaa

const ProsesHelp: React.FC<{ item: HelpModel }> = ({ item }) => {
  const navigate = useNavigate();
  const [prosesData, setProsesData] = useState({
    pesanTambahan: "",
    statusAjuan: "",
  });

  const [userData] = useLocalStorage("user");
  const [isLoading, , , formSubmit, isSuccess] = useFetch<{}>({
    method: "PUT",
    url: `/bantuan/${item.id}`,
    headers: {
      Authorization: `Bearer ${userData.jwtToken} `,
    },
    data: prosesData,
  });

  if (isSuccess) {
    navigate("/permintaanBantuan");
  }

  const sendRequest = (userAction: string) => {
    setProsesData((prev) => {
      const newState = {
        ...prev,
        statusAjuan: userAction,
      };
      return newState;
    });
    formSubmit();
  };

  return (
    <>
      <div className="w-[70%]">
        <p className="mt-4 text-lg font-medium">
          Tanggal Pengajuan: {item.createdAt}
        </p>
        <p className="mt-4 text-lg font-medium">
          Judul Pengajuan: {item.judul}
        </p>
        <p className="mt-4 text-lg font-medium">
          Deskripsi Pengajuan: {item.deskripsi}
        </p>

        <p className="mt-4 text-lg font-medium">
          Status Pengajuan: <span className="text-yellow">DiProses</span>
        </p>
      </div>
      <div className=" w-[70%]">
        <h3 className="heading1 mt-8 mb-4">Pesan Tambahan</h3>
        <textarea
          rows={4}
          className="block p-2.5 w-full border border-border-grey text-sm text-black  rounded-lg   "
          placeholder="Tuliskan pesan tambahan kepada orang tua atas respon yang anda berikan, baik menerima maupun menolak permintaan bantuannya"
          value={prosesData.pesanTambahan}
          onChange={(e) =>
            setProsesData((prev) => ({
              ...prev,
              pesanTambahan: e.target.value,
            }))
          }
        />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col md:flex-row my-8 w-full gap-4  items-center">
          <button
            onClick={() => sendRequest("gagal")}
            className="w-full md:w-[50%] h-[46px] bg-transparent  text-ms text-red font-semibold py-2 px-4 border border-border-grey rounded-lg"
          >
            Tolak Permintaan
          </button>
          <div className=" w-full md:w-[50%] h-[46px]">
            <button
              type="button"
              onClick={() => sendRequest("sukses")}
              className=" bg-green  text-white  rounded-lg block text-ms font-semibold w-full h-full  "
            >
              Terima Permintaan
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default ProsesHelp;
