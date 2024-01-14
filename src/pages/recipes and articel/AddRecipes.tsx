import { ChangeEvent, FormEvent, useState } from "react";
import Dropdown from "../../components/Dropdown";
import FliedPrenaghcyInput from "../../components/FliedPrenaghcyInput";
import InputFlied from "../../components/InputFlied";
import TwoButton from "../../components/TwoButton";
import MainLayout from "../../layout/Mainlayout";
import {
  optionsRecipesAgeBaby,
  optionsRecipesAgeMoms,
  optionsRecipesFor,
  optionsRecipesMade,
  optionsRecipesTime,
  optionsRecipesTimeMade,
} from "../../constant/recipes";
import { useFetch } from "../../hooks/useFetch";

import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";

interface formRecipesType {
  judulResep: string;
  targetResep: string;
  targetUsiaResep: string;
  jenis: string;
  bahanUtama: string;
  lamaDurasi: string;
  bahanText: string;
  caraMembuatText: string;
  nilaiGiziText: string;
}

const AddRecipes = () => {
  const navigate = useNavigate();
  const [formRecipes, setFormRecipes] = useState<formRecipesType>({
    judulResep: "",
    targetResep: "",
    targetUsiaResep: "",
    jenis: "",
    bahanUtama: "",
    lamaDurasi: "",
    bahanText: "",
    caraMembuatText: "",
    nilaiGiziText: "",
  });
  const [file, setFile] = useState<File>();
  const [userData] = useLocalStorage("user");

  const recepiesFor = formRecipes.targetResep === "orang_tua";

  // consume Api
  const [isLoading, , , formSubmit, isSuccess] = useFetch(
    {
      method: "POST",
      url: "/resep/makanan",
      data: {
        image: file,
        dto: formRecipes,
      },
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${userData.jwtToken} `,
      },
    },
    false,
    true
  );

  //handle drowndowm select
  const handleOptionSelect = (selectedOption: string, name: string) => {
    setFormRecipes((formRecipe) => ({
      ...formRecipe,
      [name]: selectedOption,
    }));
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormRecipes((formRecipe) => ({
      ...formRecipe,
      [name]: value,
    }));
  };

  //handel select image file
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  //handle submit form
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formRecipes);
    formSubmit();
  };

  if (isSuccess) {
    navigate("/homePage");
  }

  return (
    <MainLayout>
      <section className="w-full">
        <form id="recipes_form" onSubmit={(e) => handleSubmit(e)}>
          <h1 className="heading1 text-center">Upload Resep Makanan Baru</h1>
          <h2 className="heading1 mt-8 mb-4">Detail Resep</h2>
          <FliedPrenaghcyInput
            heading="Gambar Cover Resep*"
            subtext="Pastikan gambar tidak berukuran lebih dari 2 mb"
            child={
              <div className=" w-full py-2 px-4 border border-border-grey rounded-lg flex flex-col sm:flex-row justify-between items-center">
                <input
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
            heading="Judul Resep*"
            subtext="Pastikan Judul Resep Yang Kamu Masukkan Sesuai Dan Tidak Menggandung SARA"
            child={
              <InputFlied
                placeHolder="Masukkan Judul Dari Resepnya Disini"
                onChangeValue={(e) => handleInputChange(e)}
                name="judulResep"
              />
            }
          />

          <FliedPrenaghcyInput
            heading="Resep Diperuntukkan Kepada*"
            subtext=" "
            child={
              <Dropdown
                options={optionsRecipesFor}
                onSelect={handleOptionSelect}
                name="targetResep"
              />
            }
          />

          <FliedPrenaghcyInput
            heading="Kategori Usia Sasaran Resep*"
            subtext=" "
            child={
              <Dropdown
                options={
                  recepiesFor ? optionsRecipesAgeMoms : optionsRecipesAgeBaby
                }
                onSelect={handleOptionSelect}
                name="targetUsiaResep"
              />
            }
          />

          <FliedPrenaghcyInput
            heading="Resep Cocok Dimakan Sebagai*"
            subtext=" "
            child={
              <Dropdown
                options={optionsRecipesTime}
                onSelect={handleOptionSelect}
                name="jenis"
              />
            }
          />

          <FliedPrenaghcyInput
            heading="Bahan Makanan Utama Dari Resep*"
            subtext=" "
            child={
              <Dropdown
                options={optionsRecipesMade}
                onSelect={handleOptionSelect}
                name="bahanUtama"
              />
            }
          />
          <FliedPrenaghcyInput
            heading="Lama Durasi Untuk Memasak Resep*"
            subtext=" "
            child={
              <Dropdown
                options={optionsRecipesTimeMade}
                onSelect={handleOptionSelect}
                name="lamaDurasi"
              />
            }
          />

          <div className=" w-[70%]">
            <h3 className="heading1 mt-8 mb-4">Bahan Yang Perlu Disiapkan</h3>
            <textarea
              rows={4}
              className="block p-2.5 w-full border border-border-grey text-sm text-black  rounded-lg   "
              placeholder="Tuliskan Bahan Yang Perlu Disiapkan Disini"
              onChange={(e) => handleInputChange(e)}
              name="bahanText"
              required
            />
          </div>
          <div className=" w-[70%]">
            <h3 className="heading1 mt-8 mb-4">Cara Membuat</h3>
            <textarea
              rows={4}
              className="block p-2.5 w-full border border-border-grey text-sm text-black  rounded-lg   "
              placeholder="Tuliskan Cara/Langkah Untuk Membuatnya Disini"
              onChange={(e) => handleInputChange(e)}
              name="caraMembuatText"
              required
            />
          </div>
          <div className=" w-[70%]">
            <h3 className="heading1 mt-8 mb-4">Informasi Nilai Gizi</h3>
            <textarea
              rows={4}
              className="block p-2.5 w-full border border-border-grey text-sm text-black  rounded-lg   "
              placeholder="Tuliskan Detail Informasi Dari Nilai Gizi Yang Terkandung Pada Resepnya Disini"
              onChange={(e) => handleInputChange(e)}
              name="nilaiGiziText"
              required
            />
          </div>

          <TwoButton
            textButton1="Batalkan Simpan"
            textButton2="Upload Resep"
            typeButton="submit"
            idForm="recipes_form"
            route="/homepage"
            isLoading={isLoading}
          />
        </form>
      </section>
    </MainLayout>
  );
};
export default AddRecipes;
