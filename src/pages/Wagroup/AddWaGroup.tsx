import { ChangeEvent, useState } from "react";
import FliedPrenaghcyInput from "../../components/FliedPrenaghcyInput";
import InputFlied from "../../components/InputFlied";
import TwoButton from "../../components/TwoButton";
import MainLayout from "../../layout/Mainlayout";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";

const AddWaGroup = () => {
  const navigator = useNavigate();
  const [formAddWa, setFormAddWa] = useState({
    namaGrup: "",
    linkGrupWhatsapp: "",
  });
  const [userData] = useLocalStorage("user");

  // consume api
  const [isLoading, data, error, formSubmit, isSuccess] = useFetch({
    method: "POST",
    url: "/whatsapp",
    data: formAddWa,
    headers: {
      Authorization: `Bearer ${userData.jwtToken} `,
    },
  });

  //handle input flied change
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormAddWa((formAddWa) => ({
      ...formAddWa,
      [name]: value,
    }));
  };

  //handle submit form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formAddWa);
    formSubmit();
  };

  //if api succes
  const handleLoginSuccess = () => {
    localStorage.setItem("user", JSON.stringify(data));

    navigator("/waGruop");
  };

  if (isSuccess) {
    handleLoginSuccess();
  }

  return (
    <MainLayout>
      <form id="addwa_form" onSubmit={(e) => handleSubmit(e)}>
        <h1 className="heading1 mb-5 text-center">Tambahkan Grup Whatsapp</h1>
        <div>
          <FliedPrenaghcyInput
            heading="Nama Grup*"
            subtext="Pastikan Anda memasukkan nama grup yang benar dan tidak mengandung SARA"
            child={
              <InputFlied
                placeHolder="Masukkan Nama Dari Grup Whatsapp Anda Disini"
                name="namaGrup"
                onChangeValue={(e) => handleInputChange(e)}
              />
            }
          />
          <FliedPrenaghcyInput
            heading="Link Grup Whatsapp*"
            subtext="Pastikan link url dari grup whatsapp yang Anda masukkan valid, dan bisa di join oleh orang tua"
            child={
              <InputFlied
                placeHolder={"Masukkan Link Dari Grup Whatsapp Anda Disini"}
                name="linkGrupWhatsapp"
                onChangeValue={(e) => handleInputChange(e)}
              />
            }
          />
        </div>
        <TwoButton
          textButton1="Batalkan Tambah Grup"
          textButton2="Tambahkan Grup"
          route="/waGruop"
          isLoading={isLoading}
          idForm="addwa_form"
        />
      </form>
    </MainLayout>
  );
};
export default AddWaGroup;
