import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Datepicker from "../../components/Datepicker";
import Dropdown from "../../components/Dropdown";
import FliedPrenaghcyInput from "../../components/FliedPrenaghcyInput";
import MainLayout from "../../layout/Mainlayout";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../../components/Loader";

const options = ["baik", "lemah", "beresiko"];

interface PrenangcyDataModel {
  tanggalPemeriksaan: string;
  tempatPemeriksaan: string;
  namaPemeriksa: string;
  usiaKandungan: number;
  tekananDarah: string;
  beratBadanIbu: number;
  statusKehamilan: string;
  pesanTambahan: string;
}

const InputPrenagcyData = () => {
  const location = useLocation();
  const idOrtu = location.state?.idOrtu as number;
  const idBayi = location.state?.idBayi as number;
  const navigate = useNavigate();
  const [formData, setFormData] = useState<PrenangcyDataModel>({
    tanggalPemeriksaan: "",
    tempatPemeriksaan: "",
    namaPemeriksa: "",
    usiaKandungan: 0,
    tekananDarah: "",
    beratBadanIbu: 0,
    statusKehamilan: "",
    pesanTambahan: "",
  });

  const [userData] = useLocalStorage("user");

  // consume api
  const [isLoading, , , sendRequest, isSuccess] = useFetch<{}>({
    method: "POST",
    url: `/pemeriksaan/kehamilan/{id}`,
    params: {
      id: idOrtu,
      data_kehamilan_id: idBayi,
    },
    headers: {
      Authorization: `Bearer ${userData.jwtToken} `,
    },
    data: formData,
  });

  const handleOptionSelect = (selectedOption: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      statusKehamilan: selectedOption,
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const numericValue =
      name === "usiaKandungan" || name === "beratBadanIbu"
        ? parseFloat(value)
        : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: numericValue,
    }));
  };

  const handleDateChange = (selectedDate: string) => {
    console.log(selectedDate);

    setFormData((prevFormData) => ({
      ...prevFormData,
      tanggalPemeriksaan: selectedDate,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    sendRequest();
  };

  if (isSuccess) {
    navigate("/addData");
  }

  return (
    <MainLayout>
      <section>
        <h1 className="font-semibold text-4xl text-center">Data Kehamilan</h1>
        <h2 className="font-semibold text-2xl mt-8">Detail Pemeriksaan</h2>

        <form id="form-ini" onSubmit={(e) => handleSubmit(e)}>
          <FliedPrenaghcyInput
            heading="Tanggal Pemeriksaan*"
            subtext=" Pastikan Tanggal Yang Dimasukkan Sesuai Dengan Tanggal Pemeriksaan Yang Tertera Pada Laporan Hasil Pemeriksaan"
            child={<Datepicker onDateChange={handleDateChange} />}
          />

          <FliedPrenaghcyInput
            heading="Tempat Pemeriksaan*"
            subtext="Pastikan Nama Tempat Pemeriksaan Sesuai Dengan Hasil Laporan Yang Dikirim Oleh Orang Tua"
            child={
              <input
                type="text"
                className="w-full relative p-2 border border-border-grey rounded-md mt-2  pr-10"
                placeholder="Masukkan Nama Tempat Ibu Memeriksakan Kandungannya disini"
                name="tempatPemeriksaan"
                onChange={(e) => handleChange(e)}
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
                name="namaPemeriksa"
                onChange={(e) => handleChange(e)}
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
                name="usiaKandungan"
                onChange={(e) => handleChange(e)}
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
                name="tekananDarah"
                onChange={(e) => handleChange(e)}
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
                name="beratBadanIbu"
                onChange={(e) => handleChange(e)}
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
                name="pesanTambahan"
                onChange={(e) => handleChange(e)}
              />
            }
          />
          <div className="flex flex-col md:flex-row my-8 w-full gap-4  items-center">
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="w-full md:w-[50%] h-[46px] bg-transparent  text-ms text-orange font-semibold py-2 px-4 border border-border-grey rounded-lg"
                >
                  Kembali
                </button>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-orange  text-white w-full md:w-[50%] h-[46px] rounded-lg block text-ms font-semibold"
                >
                  Simpan Data
                </button>
              </>
            )}
          </div>
        </form>
      </section>
    </MainLayout>
  );
};

export default InputPrenagcyData;
