import { useLocation } from "react-router-dom";
import TwoButton from "../../components/TwoButton";
import MainLayout from "../../layout/Mainlayout";

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
  const data = location.state?.artikel as ArtikelDataProps;
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
        <h2 className="heading1 ">Cara Membuat</h2>
        <p className="mt-5 text-lg font-medium">{data.isiText}</p>
      </div>

      <TwoButton
        textButton1="Hapus Artikel"
        textButton2="Ubah Detail Artikel"
        route="#"
        isLoading={false}
      />
    </MainLayout>
  );
};
export default DetailArticel;
