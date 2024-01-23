import { useLocation, useNavigate } from "react-router-dom";
import Datepicker from "../../components/Datepicker";
import Dropdown from "../../components/Dropdown";
import FliedPrenaghcyInput from "../../components/FliedPrenaghcyInput";
import InputFlied from "../../components/InputFlied";
import MainLayout from "../../layout/Mainlayout";
import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../../components/Loader";

const options = ["baik", "berpotensi", "terindikasi"];

interface ChildDataModel {
  tanggalPemeriksaan: string;
  tempatPemeriksaan: string;
  namaPemeriksa: string;
  umurAnak: string;
  tinggiAnak: number;
  beratBadanAnak: number;
  statusAnak: string;
  pesanTambahan: string;
}

const InputChildData = () => {
  const location = useLocation();
  const idOrtu = location.state?.idOrtu as number;
  const idAnak = location.state?.idAnak as number;
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ChildDataModel>({
    tanggalPemeriksaan: "",
    tempatPemeriksaan: "",
    namaPemeriksa: "",
    umurAnak: "",
    tinggiAnak: 0,
    beratBadanAnak: 0,
    statusAnak: "",
    pesanTambahan: "",
  });

  //handle dropwodn input
  const handleOptionSelect = (selectedOption: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      statusAnak: selectedOption,
    }));
  };

  //handle date input
  const handleDateChange = (selectedDate: string) => {
    console.log(selectedDate);

    setFormData((prevFormData) => ({
      ...prevFormData,
      tanggalPemeriksaan: selectedDate,
    }));
  };

  //hanlde untuk data form input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const numericValue =
      name === "tinggiAnak" || name === "beratBadanAnak"
        ? parseFloat(value)
        : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: numericValue,
    }));
  };
  const [userData] = useLocalStorage("user");

  // consume api
  const [isLoading, , , sendRequest, isSuccess] = useFetch<{}>({
    method: "POST",
    url: `/pemeriksaan/anak`,
    params: {
      id: idOrtu,
      data_anak_id: idAnak,
    },
    headers: {
      Authorization: `Bearer ${userData.jwtToken} `,
    },
    data: formData,
  });

  //hanlde submit form
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
        <h1 className="font-semibold text-4xl text-center">Data Anak </h1>
        <h2 className="font-semibold text-2xl mt-8">Detail Pemeriksaan</h2>

        <form id="form-child-data" onSubmit={(e) => handleSubmit(e)}>
          <FliedPrenaghcyInput
            heading="Tanggal Pemeriksaan*"
            subtext=" Pastikan Tanggal Yang Dimasukkan Sesuai Dengan Tanggal Pemeriksaan Yang Tertera Pada Laporan Hasil Pemeriksaan"
            child={<Datepicker onDateChange={handleDateChange} />}
          />

          <FliedPrenaghcyInput
            heading="Tempat Pemeriksaan*"
            subtext="Pastikan Nama Tempat Pemeriksaan Sesuai Dengan Hasil Laporan Yang Dikirim Oleh Orang Tua"
            child={
              <InputFlied
                placeHolder="Masukkan Nama Tempat Ibu Memeriksakan Anaknya disini"
                name="tempatPemeriksaan"
                onChangeValue={(e) => handleChange(e)}
              />
            }
          />

          <FliedPrenaghcyInput
            heading="Diperiksa Oleh*"
            subtext="Pastikan Nama Pemeriksa Sesuai Dengan Hasil Laporan Yang Dikirim Oleh Orang Tua"
            child={
              <InputFlied
                placeHolder="Masukkan Nama Dokter Atau Tenaga Kesehatan Yang Memeriksakan Anak Disini"
                name="namaPemeriksa"
                onChangeValue={(e) => handleChange(e)}
              />
            }
          />

          <h2 className="font-semibold text-2xl mt-8">Hasil Pemeriksaan</h2>

          <FliedPrenaghcyInput
            heading="Umur Anak*"
            subtext="Pastikan Angka Usia Anak Yang Diinput Dalam Bentuk Tahun/Bulan/Hari"
            child={
              <InputFlied
                placeHolder="Tahun/Bulan/Hari"
                name="umurAnak"
                onChangeValue={(e) => handleChange(e)}
              />
            }
          />
          <FliedPrenaghcyInput
            heading="Tinggi Anak*"
            subtext="Masukkan Tinggi Anak Disini"
            child={
              <InputFlied
                placeHolder="Pastikan Tinggi Anak Yang Diinput Dalam Satuan cm"
                name="tinggiAnak"
                onChangeValue={(e) => handleChange(e)}
              />
            }
          />
          <FliedPrenaghcyInput
            heading="Berat Badan Anak*"
            subtext="Pastikan Berat Badan Anak Yang Diinput Dalam Satuan kg"
            child={
              <InputFlied
                placeHolder="Masukkan Berat Badan Anak Disini"
                name="beratBadanAnak"
                onChangeValue={(e) => handleChange(e)}
              />
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
              <InputFlied
                placeHolder="Masukkan Pesan Tambahan Untuk Ibu & Anak Disini"
                name="pesanTambahan"
                onChangeValue={(e) => handleChange(e)}
              />
            }
          />
          <div className="flex flex-row my-8 w-full gap-4  items-center">
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <button
                  type="button"
                  className=" w-[50%] h-[46px] bg-transparent  text-ms text-orange font-semibold py-2 px-4 border border-border-grey rounded-lg"
                >
                  Batalkan Simpan
                </button>

                <button
                  type="submit"
                  className=" bg-orange  text-white  w-[50%] h-[46px] rounded-lg block text-ms font-semibold   "
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
export default InputChildData;
