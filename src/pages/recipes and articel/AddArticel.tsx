import { ChangeEvent, useState } from "react";
import FliedPrenaghcyInput from "../../components/FliedPrenaghcyInput";
import InputFlied from "../../components/InputFlied";
import TwoButton from "../../components/TwoButton";
import MainLayout from "../../layout/Mainlayout";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";

const AddArticel = () => {
  const navigator = useNavigate();
  const [file, setFile] = useState<File>();

  const [userData] = useLocalStorage("user");

  const [formArticel, setFormArticel] = useState({
    judulArtikel: "string",
    namaPeninjau: "string",
    isiArtikel: "string",
  });

  //handel select image file
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  //handle input flied change
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormArticel((formArticel) => ({
      ...formArticel,
      [name]: value,
    }));
  };

  // consume Api
  const [isLoading, data, error, formSubmit, isSuccess] = useFetch(
    {
      method: "POST",
      url: "/artikel",
      data: {
        image: file,
        dto: formArticel,
      },
      headers: {
        "Content-Type": "multipart/form-data",

        Authorization: `Bearer ${userData.jwtToken} `,
      },
    },
    false,
    true
  );

  //handle submit form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formArticel);
    formSubmit();
  };

  //if api succes
  const handleLoginSuccess = () => {
    navigator("/resepMakanan");
  };

  if (isSuccess) {
    handleLoginSuccess();
  }
  return (
    <MainLayout>
      <form
        id="addArticle_form"
        className="w-full"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1 className="heading1 text-center">Upload Artikel Baru</h1>
        <h2 className="heading1 mt-8 mb-4">Detail Artikel</h2>
        <FliedPrenaghcyInput
          heading="Gambar Cover Resep*"
          subtext="Pastikan gambar tidak berukuran lebih dari 2 mb"
          child={
            <div className=" w-full py-2 px-4 border border-border-grey rounded-lg flex flex-col sm:flex-row justify-between items-center">
              <input
                required
                type="file"
                name="image"
                placeholder="Pilih Gambar"
                className=" outline-none mt-2 sm:mt-0 cursor-pointer"
                onChange={(e) => handleFileChange(e)}
              />
            </div>
          }
        />
        <FliedPrenaghcyInput
          heading="Judul Artikel*"
          subtext="Pastikan Judul Artikel Yang Kamu Masukkan Sesuai Dan Tidak Menggandung SARA"
          child={
            <InputFlied
              placeHolder="Masukkan Judul Dari Resepnya Disini"
              name="judulArtikel"
              onChangeValue={(e) => handleInputChange(e)}
            />
          }
        />

        <FliedPrenaghcyInput
          heading="Ditinjau Oleh*"
          subtext="Pastikan Dokter atau Tenaga Kesehatan Tersebut Kredible Untuk Memberikan Izin Artikel Ini Layak Untuk Dipublish"
          child={
            <InputFlied
              placeHolder="Masukkan Nama Dokter Atau Tenaga Kesehatan Yang Telah Meninjau Isi Artikel Sebelum di Upload"
              name="namaPeninjau"
              onChangeValue={(e) => handleInputChange(e)}
            />
          }
        />

        <div className=" w-[70%]">
          <h3 className="heading1 mt-8 mb-4">Isi Artikel</h3>
          <textarea
            required
            rows={4}
            className="block p-2.5 w-full border border-border-grey text-sm text-black  rounded-lg   "
            placeholder="Tuliskan Isi Dari Artikelnya Disini"
            name="isiArtikel"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <TwoButton
          textButton1="Batalkan Simpan"
          textButton2="Upload Artikel"
          route="/menuArticle"
          isLoading={isLoading}
          idForm="addArticle_form"
        />
      </form>
    </MainLayout>
  );
};
export default AddArticel;
