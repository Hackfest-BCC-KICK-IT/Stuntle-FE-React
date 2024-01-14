import { Link, useLocation, useNavigate } from "react-router-dom";
import TwoButton from "../../components/TwoButton";
import MainLayout from "../../layout/Mainlayout";
import PopModal from "../../components/PopUp";
import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useFetch } from "../../hooks/useFetch";

interface ArtikelDataProps {
  id: number;
  publicId: string;
  linkGambar: string;
  judulArtikel: string;
  peninjau: string;
  isiText: string;
}

const DetailArticel = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.artikel as ArtikelDataProps;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [userData] = useLocalStorage("user");

  const [, , , formSubmit, isSuccess] = useFetch<{}>({
    method: "DELETE",
    url: `/artikel/${data.id}`,
    headers: {
      Authorization: `Bearer ${userData.jwtToken} `,
    },
  });

  const handleDeleteClick = () => {
    setIsOpen(true);
  };

  const handleDeleteConfirm = () => {
    formSubmit();
    setIsOpen(false);
  };
  if (isSuccess) {
    navigate("/menuArticle");
  }

  const handleDeleteCancel = () => {
    setIsOpen(false);
  };
  return (
    <MainLayout>
      <h1 className="heading1 text-center">Detail Artikel Kesehatan</h1>

      <div className="my-8">
        <h2 className="heading1 ">Detail Artikel</h2>
        <p className="my-4 text-lg font-medium">
          Gambar Cover Artikel: Foto Artikel.jpg
        </p>
        <p className="mb-4 text-lg font-medium">
          Judul Artikel: {data.judulArtikel}
        </p>
        <p className="mb-4 text-lg font-medium">
          Ditinjau Oleh: {data.peninjau}
        </p>
      </div>

      <div className="my-8">
        <h2 className="heading1 ">Isi Artikel</h2>
        <p className="mt-5 text-lg font-medium">{data.isiText}</p>
      </div>

      <div className="flex flex-col md:flex-row my-8 w-full gap-4  items-center">
        <button
          className="w-full md:w-[50%] h-[46px] bg-transparent  text-ms text-orange font-semibold py-2 px-4 border border-border-grey rounded-lg"
          onClick={() => handleDeleteClick()}
        >
          Hapus Artikel
        </button>
        <Link to="#" className=" w-full md:w-[50%] h-[46px]">
          <button
            type="button"
            className=" bg-orange  text-white  rounded-lg block text-ms font-semibold w-full h-full  "
          >
            Ubah Detail Artikel
          </button>
        </Link>
      </div>
      <PopModal
        isOpen={isOpen}
        onClose={handleDeleteCancel}
        onDelete={handleDeleteConfirm}
      />
    </MainLayout>
  );
};
export default DetailArticel;
