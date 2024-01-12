import TwoButton from "../../components/TwoButton";
import MainLayout from "../../layout/Mainlayout";

const DetailRecipes = () => {
  return (
    <MainLayout>
      <h1 className="heading1 text-center">Detail Resep Makanan</h1>

      <div className="my-8">
        <h2 className="heading1 ">Detail Resep</h2>
        <p className="my-4 text-lg font-medium">
          Gambar Cover Resep: Foto Resep.jpg
        </p>
        <p className="mb-4 text-lg font-medium">
          Judul Resep: Bubur Ayam Sehat Dan Lezat
        </p>
        <p className="mb-4 text-lg font-medium">
          Resep Diperuntukkan Kepada: Ibu Hamil
        </p>
        <p className="mb-4 text-lg font-medium">
          Kategori Usia Sasaran Resep: Trisemester 1
        </p>
        <p className="mb-4 text-lg font-medium">
          Resep Cocok Dimakan Sebagai: Sarapan
        </p>
        <p className="mb-4 text-lg font-medium">
          Bahan Makanan Utama Dari Resep: Sayuran
        </p>
        <p className="mb-4 text-lg font-medium">
          Lama Durasi Untuk Memasak Resep: 10 - 20 Menit
        </p>
        <p className="mb-4 text-lg font-medium">
          Diinput Pada Tanggal: 10 April 2023
        </p>
      </div>

      <div className="my-8">
        <h2 className="heading1 ">Bahan Yang Perlu Disiapkan</h2>
        <p className="mt-5  text-lg font-medium">
          4 sdm beras, cuci bersih,
          <br /> 1 sdm bawang bombai cincang <br />
          30 gram brokoli,cuci, potong kecil-kecil
          <br /> 40 gram ayam cincang 400 ml air
        </p>
      </div>

      <div className="my-8">
        <h2 className="heading1 ">Cara Membuat</h2>
        <p className="mt-5 text-lg font-medium">
          1. Masukkan semua bahan yang telah dicuci dengan bersih <br /> 2. Aduk
          semua bahan selama 15 menit <br /> 3. Bubur ayam siap untuk disajikan
        </p>
      </div>
      <div className="my-8">
        <h2 className="heading1 ">Informasi Nilai Gizi</h2>
        <p className="mt-5 text-lg font-medium">
          Energi: 200 kkal <br /> Protein: 1 gram <br /> Lemak: 1,6 gram
        </p>
      </div>
      <TwoButton
        textButton1="Hapus Resep"
        textButton2="Ubah Detail Resep"
        route="#"
      />
    </MainLayout>
  );
};
export default DetailRecipes;
