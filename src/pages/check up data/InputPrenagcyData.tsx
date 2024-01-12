import { useNavigate } from "react-router-dom";
import Datepicker from "../../components/Datepicker";
import Dropdown from "../../components/Dropdown";
import FliedPrenaghcyInput from "../../components/FliedPrenaghcyInput";
import MainLayout from "../../layout/Mainlayout";

const options = ["Baik", "Lemah", "Beresiko"];

const InputPrenagcyData = () => {
  const navigate = useNavigate();
  const handleOptionSelect = (selectedOption: string) => {
    console.log(`Selected option: ${selectedOption}`);
  };
  return (
    <MainLayout>
      <section>
        <h1 className="font-semibold text-4xl text-center">Data Kehamilan</h1>
        <h2 className="font-semibold text-2xl mt-8">Detail Pemeriksaan</h2>

        <form>
          <FliedPrenaghcyInput
            heading="Tanggal Pemeriksaan*"
            subtext=" Pastikan Tanggal Yang Dimasukkan Sesuai Dengan Tanggal Pemeriksaan
            Yang Tertera Pada Laporan Hasil Pemeriksaan"
            child={<Datepicker />}
          />

          <FliedPrenaghcyInput
            heading="Tempat Pemeriksaan*"
            subtext="Pastikan Nama Tempat Pemeriksaan Sesuai Dengan Hasil Laporan Yang
            Dikirim Oleh Orang Tua"
            child={
              <input
                type="text"
                className="w-full relative p-2 border border-border-grey rounded-md mt-2  pr-10"
                placeholder="Masukkan Nama Tempat Ibu Memeriksakan Kandungannya disini"
              />
            }
          />

          <FliedPrenaghcyInput
            heading="Diperiksa Oleh*"
            subtext="Pastikan Nama Pemeriksa Sesuai Dengan Hasil Laporan Yang Dikirim Oleh Orang Tua"
            child={
              <input
                type="text"
                className="w-full relative p-2 border border-border-grey rounded-md mt-2  pr-10"
                placeholder="Masukkan Nama Dokter Atau Tenaga Kesehatan Yang Memeriksakan Kandungan Ibu Disini"
              />
            }
          />

          <h2 className="font-semibold text-2xl mt-8">Hasil Pemeriksaan</h2>

          <FliedPrenaghcyInput
            heading="Usia Kandungan*"
            subtext="Pastikan Angka Usia Kandungan Yang Diinput Menggunakan Satuan Minggu"
            child={
              <input
                type="text"
                className="w-full relative p-2 border border-border-grey rounded-md mt-2  pr-10"
                placeholder="Masukkan Usia Kandungan Ibu Disini"
              />
            }
          />
          <FliedPrenaghcyInput
            heading="Tekanan Darah*"
            subtext="Pastikan Angka Tekanan Darah Ibu Yang Diinput Dalam Satuan mmHg"
            child={
              <input
                type="text"
                className="w-full relative p-2 border border-border-grey rounded-md mt-2  pr-10"
                placeholder="mm/Hg"
              />
            }
          />
          <FliedPrenaghcyInput
            heading="Berat Badan Ibu*"
            subtext="Pastikan Berat Badan Ibu Yang Diinput Dalam Satuan kg"
            child={
              <input
                type="text"
                className="w-full relative p-2 border border-border-grey rounded-md mt-2  pr-10"
                placeholder="Masukkan Berat Badan Ibu Disini"
              />
            }
          />
          <FliedPrenaghcyInput
            heading="Status Kehamilan*"
            subtext="Pilih Status Yang Tepat Sesuai Dengan Hasil Pemeriksaan Secara Keseluruhan Dari Ibu & Bayi"
            child={
              <Dropdown
                options={options}
                onSelect={handleOptionSelect}
                name="status_kehamilan"
              />
            }
          />
          <FliedPrenaghcyInput
            heading="Pesan Tambahan"
            subtext="Masukkan Pesan Tambahan Untuk Ibu Disini"
            child={
              <input
                type="text"
                className="w-full relative p-2 border border-border-grey rounded-md mt-2  pr-10"
                placeholder="Masukkan Pesan Tambahan Untuk Ibu Disini"
              />
            }
          />
          <div className="flex flex-col md:flex-row my-8 w-full gap-4  items-center">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className=" w-full md:w-[50%] h-[46px] bg-transparent  text-ms text-orange font-semibold py-2 px-4 border border-border-grey rounded-lg"
            >
              Kembali
            </button>

            <button
              type="button"
              className=" bg-orange  text-white w-full md:w-[50%] h-[46px] rounded-lg block text-ms font-semibold   "
            >
              Simpan Data
            </button>
          </div>
        </form>
      </section>
    </MainLayout>
  );
};
export default InputPrenagcyData;
