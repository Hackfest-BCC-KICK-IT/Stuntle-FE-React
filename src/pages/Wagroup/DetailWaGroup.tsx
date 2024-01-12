import { Link, useLocation } from "react-router-dom";
import MainLayout from "../../layout/Mainlayout";
import { useState } from "react";
import PopModal from "../../components/PopUp";

interface DetailWaGroupProps {
  id: number;
  namaGrup: string;
  linkGrup: string;
}

const DetailWaGroup = () => {
  const location = useLocation();
  const data = location.state?.grup as DetailWaGroupProps;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDeleteClick = () => {
    return setIsOpen(true);
  };

  const handleDeleteConfirm = () => {
    setIsOpen(false);
  };
  const handleDeleteCancel = () => {
    setIsOpen(false);
  };

  const valueText1 = data.namaGrup;
  const valueText2 = data.linkGrup;

  return (
    <MainLayout>
      <section>
        <h1 className="heading1  text-center">Detail Grup</h1>
        <div className="my-8">
          <p className="font-medium text-xl text-black mb-4">
            Nama Grup Whatsapp: {valueText1}
          </p>
          <p className="font-medium text-xl text-black mb-4">
            Link Grup Whatsapp: {valueText2}
          </p>
          <p className="font-medium text-xl text-black ">
            Diinput Pada Tanggal: 10 April 2023
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
            to={`/editDetailWaGruop?valueText1=${valueText1}&valueText2=${valueText2}`}
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
        onClose={handleDeleteCancel}
        onDelete={handleDeleteConfirm}
      />
    </MainLayout>
  );
};
export default DetailWaGroup;
