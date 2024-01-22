import Datepicker from "../../components/Datepicker";
import Dropdown from "../../components/Dropdown";
import FliedPrenaghcyInput from "../../components/FliedPrenaghcyInput";
import InputFlied from "../../components/InputFlied";
import MainLayout from "../../layout/Mainlayout";

const options = ["Baik", "Lemah", "Beresiko"];

const InputChildData = () => {
  const handleOptionSelect = (selectedOption: string) => {
    console.log(`Selected option: ${selectedOption}`);
  };
  const handleDateChange = (selectedDate: string) => {
    console.log(selectedDate);
  };
  return (
    <MainLayout>
      <section>
        <h1 className="font-semibold text-4xl text-center">Data Anak Ke-1</h1>
        <h2 className="font-semibold text-2xl mt-8">Detail Pemeriksaan</h2>

        <form>
          <FliedPrenaghcyInput
            heading="Tanggal Pemeriksaan*"
            subtext=" Pastikan Tanggal Yang Dimasukkan Sesuai Dengan Tanggal Pemeriksaan Yang Tertera Pada Laporan Hasil Pemeriksaan"
            child={<Datepicker onDateChange={handleDateChange} />}
          />

          <FliedPrenaghcyInput
            heading="Tempat Pemeriksaan*"
            subtext="Pastikan Nama Tempat Pemeriksaan Sesuai Dengan Hasil Laporan Yang Dikirim Oleh Orang Tua"
            child={
              <InputFlied placeHolder="Masukkan Nama Tempat Ibu Memeriksakan Anaknya disini" />
            }
          />

          <FliedPrenaghcyInput
            heading="Diperiksa Oleh*"
            subtext="Pastikan Nama Pemeriksa Sesuai Dengan Hasil Laporan Yang Dikirim Oleh Orang Tua"
            child={
              <InputFlied placeHolder="Masukkan Nama Dokter Atau Tenaga Kesehatan Yang Memeriksakan Anak Disini" />
            }
          />

          <h2 className="font-semibold text-2xl mt-8">Hasil Pemeriksaan</h2>

          <FliedPrenaghcyInput
            heading="Umur Anak*"
            subtext="Pastikan Angka Usia Anak Yang Diinput Dalam Bentuk Tahun/Bulan/Hari"
            child={<InputFlied placeHolder="Tahun/Bulan/Hari" />}
          />
          <FliedPrenaghcyInput
            heading="Tinggi Anak*"
            subtext="Masukkan Tinggi Anak Disini"
            child={
              <InputFlied placeHolder="Pastikan Tinggi Anak Yang Diinput Dalam Satuan cm" />
            }
          />
          <FliedPrenaghcyInput
            heading="Berat Badan Anak*"
            subtext="Pastikan Berat Badan Anak Yang Diinput Dalam Satuan kg"
            child={
              <InputFlied placeHolder="Masukkan Berat Badan Anak Disini" />
            }
          />
          <FliedPrenaghcyInput
            heading="Status Gizi Anak*"
            subtext="Pilih Status Yang Tepat Sesuai Dengan Hasil Pemeriksaan Secara Keseluruhan Dari Anak"
            child={
              <Dropdown
                options={options}
                onSelect={handleOptionSelect}
                name="gizi_anak"
              />
            }
          />
          <FliedPrenaghcyInput
            heading="Pesan Tambahan"
            subtext="Masukkan Pesan Dari Hasil Pemeriksaan Yang Dilakukan Untuk Ibu & Anak Jika Ada"
            child={
              <InputFlied placeHolder="Masukkan Pesan Tambahan Untuk Ibu & Anak Disini" />
            }
          />
          <div className="flex flex-row my-8 w-full gap-4  items-center">
            <button
              type="button"
              className=" w-[50%] h-[46px] bg-transparent  text-ms text-orange font-semibold py-2 px-4 border border-border-grey rounded-lg"
            >
              Batalkan Simpan
            </button>

            <button
              type="button"
              className=" bg-orange  text-white  w-[50%] h-[46px] rounded-lg block text-ms font-semibold   "
            >
              Simpan Data
            </button>
          </div>
        </form>
      </section>
    </MainLayout>
  );
};
export default InputChildData;
