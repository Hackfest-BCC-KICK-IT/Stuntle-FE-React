import { Link, useLocation, useNavigate } from "react-router-dom";
import MainLayout from "../../layout/Mainlayout";
import { useState } from "react";
import PopModal from "../../components/PopUp";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useFetch } from "../../hooks/useFetch";

interface MenuRecipesProps {
  id: number;
  publicId: string;
  urlGambar: string;
  judulResep: string;
  targetResep: string;
  targetUsiaResep: string;
  jenis: string;
  bahanUtama: string;
  durasiMemasak: string;
  bahanText: string;
  caraMembuatText: string;
  nilaiGiziText: string;
  createdAt: string;
}

const DetailRecipes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.recepies as MenuRecipesProps;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [userData] = useLocalStorage("user");

  const [, , , formSubmit, isSuccess] = useFetch<{}>({
    method: "DELETE",
    url: `/resep/makanan/${data.id}`,
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
    navigate("/menuRecipes");
  }

  const handleDeleteCancel = () => {
    setIsOpen(false);
  };
  return (
    <MainLayout>
      <h1 className="heading1 text-center">Detail Resep Makanan</h1>

      <div className="my-8">
        <h2 className="heading1 ">Detail Resep</h2>
        <p className="my-4 text-lg font-medium">
          Gambar Cover Resep:{" "}
          <a
            href={data.urlGambar}
            target="_blank"
            className="hover:cursor-pointer text-blue-400 underline"
          >
            Gambar.jpg
          </a>
        </p>
        <p className="mb-4 text-lg font-medium">
          Judul Resep: {data.judulResep}
        </p>
        <p className="mb-4 text-lg font-medium">
          Resep Diperuntukkan Kepada: {data.targetResep}
        </p>
        <p className="mb-4 text-lg font-medium">
          Kategori Usia Sasaran Resep: {data.targetUsiaResep}
        </p>
        <p className="mb-4 text-lg font-medium">
          Resep Cocok Dimakan Sebagai: {data.jenis}
        </p>
        <p className="mb-4 text-lg font-medium">
          Bahan Makanan Utama Dari Resep: {data.bahanUtama}
        </p>
        <p className="mb-4 text-lg font-medium">
          Lama Durasi Untuk Memasak Resep: {data.durasiMemasak}
        </p>
        <p className="mb-4 text-lg font-medium">
          Diinput Pada Tanggal: {data.createdAt}
        </p>
      </div>

      <div className="my-8">
        <h2 className="heading1 ">Bahan Yang Perlu Disiapkan</h2>
        <p className="mt-5  text-lg font-medium">{data.bahanText}</p>
      </div>

      <div className="my-8">
        <h2 className="heading1 ">Cara Membuat</h2>
        <p className="mt-5 text-lg font-medium">{data.caraMembuatText}</p>
      </div>
      <div className="my-8">
        <h2 className="heading1 ">Informasi Nilai Gizi</h2>
        <p className="mt-5 text-lg font-medium">{data.nilaiGiziText}</p>
      </div>
      <div className="flex flex-col md:flex-row my-8 w-full gap-4  items-center">
        <button
          className="w-full md:w-[50%] h-[46px] bg-transparent  text-ms text-orange font-semibold py-2 px-4 border border-border-grey rounded-lg"
          onClick={() => handleDeleteClick()}
        >
          Hapus Resep
        </button>
        <Link to="#" className=" w-full md:w-[50%] h-[46px]">
          <button
            type="button"
            className=" bg-orange  text-white  rounded-lg block text-ms font-semibold w-full h-full  "
          >
            Ubah Detail Resep
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
export default DetailRecipes;
