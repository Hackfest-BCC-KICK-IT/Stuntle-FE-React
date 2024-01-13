import { Link, useLocation, useNavigate } from "react-router-dom";
import MainLayout from "../../layout/Mainlayout";
import { useState } from "react";
import PopModal from "../../components/PopUp";
import { useFetch } from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";

interface DetailWaGroupProps {
  id: number;
  namaGrup: string;
  linkGrup: string;
  createdAt: string;
}

const DetailWaGroup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.grup as DetailWaGroupProps;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userData] = useLocalStorage("user");

  const [, , , formSubmit, isSuccess] = useFetch<{}>({
    method: "DELETE",
    url: `/whatsapp/${data.id}`,
    headers: {
      Authorization: `Bearer ${userData.jwtToken} `,
    },
  });

  const handleDeleteClick = () => {
    return setIsOpen(true);
  };

  //want delete grup
  const handleDeleteConfirm = () => {
    formSubmit();
    setIsOpen(false);
  };

  //cance delete pop up grup
  const handleDeleteCancel = () => {
    setIsOpen(false);
  };

  const handleLoginSuccess = () => {
    navigate("/waGruop");
  };

  if (isSuccess) {
    handleLoginSuccess();
  }

  const nama = data.namaGrup;
  const link = data.linkGrup;

  return (
    <MainLayout>
      <section>
        <h1 className="heading1  text-center">Detail Grup</h1>
        <div className="my-8">
          <p className="font-medium text-xl text-black mb-4">
            Nama Grup Whatsapp: {nama}
          </p>
          <p className="font-medium text-xl text-black mb-4">
            Link Grup Whatsapp: {link}
          </p>
          <p className="font-medium text-xl text-black ">
            Diinput Pada Tanggal: {data.createdAt}
          </p>
        </div>
        <div className="flex flex-col md:flex-row my-8 w-full gap-4  items-center">
          <button
            className="w-full md:w-[50%] h-[46px] bg-transparent  text-ms text-orange font-semibold py-2 px-4 border border-border-grey rounded-lg"
            onClick={() => handleDeleteClick()}
          >
            Hapus Grup
          </button>
          <Link
            to={`/editDetailWaGruop?nama=${nama}&link=${link}&id=${data.id}`}
            className=" w-full md:w-[50%] h-[46px]"
          >
            <button
              type="button"
              className=" bg-orange  text-white  rounded-lg block text-ms font-semibold w-full h-full  "
            >
              Ubah Detail Grup
            </button>
          </Link>
        </div>
      </section>
      <PopModal
        isOpen={isOpen}
        onClose={() => handleDeleteCancel()}
        onDelete={() => handleDeleteConfirm()}
      />
    </MainLayout>
  );
};
export default DetailWaGroup;
