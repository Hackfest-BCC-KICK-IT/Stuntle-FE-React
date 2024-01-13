import { useLocation, useNavigate } from "react-router-dom";
import FliedPrenaghcyInput from "../../components/FliedPrenaghcyInput";
import InputFlied from "../../components/InputFlied";
import TwoButton from "../../components/TwoButton";
import MainLayout from "../../layout/Mainlayout";
import { useFetch } from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useState } from "react";

interface EditDetailGroupProps {
  nama: string;
  link: string;
  id: string;
}

const EditDetailGroup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userData] = useLocalStorage("user");
  const queryParams = new URLSearchParams(location.search);

  const [formDetail, setformDetail] = useState<EditDetailGroupProps>({
    nama: queryParams.get("nama") || "",
    link: queryParams.get("link") || "",
    id: queryParams.get("id") || "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setformDetail((prevFormDetail) => ({
      ...prevFormDetail,
      [name]: value,
    }));
  };

  const [isLoading, , , formSubmit, isSuccess] = useFetch<{}>({
    method: "PUT",
    url: `/whatsapp/${formDetail.id}`,
    headers: {
      Authorization: `Bearer ${userData.jwtToken} `,
    },
    data: {
      namaGrup: formDetail.nama,
      linkGrupWhatsapp: formDetail.link,
    },
  });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formSubmit();
  };

  const handleLoginSuccess = () => {
    navigate("/waGruop");
  };

  if (isSuccess) {
    handleLoginSuccess();
  }

  return (
    <MainLayout>
      <section>
        <h1 className="heading1 mb-5 text-center">Edit Grup</h1>
        <form id="form-detail-wa" onSubmit={(e) => handleFormSubmit(e)}>
          <FliedPrenaghcyInput
            heading="Nama Grup*"
            subtext="Pastikan Anda memasukkan nama grup yang benar dan tidak mengandung SARA"
            child={
              <InputFlied
                value={formDetail.nama}
                placeHolder="Nama Grup"
                name="nama"
                onChangeValue={handleInputChange}
              />
            }
          />
          <FliedPrenaghcyInput
            heading="Link Grup Whatsapp*"
            subtext="Pastikan link url dari grup whatsapp yang Anda masukkan valid, dan bisa di join oleh orang tua"
            child={
              <InputFlied
                value={formDetail.link}
                placeHolder="Link Grup"
                name="link"
                onChangeValue={handleInputChange}
              />
            }
          />
          <TwoButton
            textButton1="Batalkan Edit Grup"
            textButton2="Submit Edit Grup"
            route="/waGruop"
            isLoading={isLoading}
            typeButton="submit"
            idForm="form-detail-wa"
          />
        </form>
      </section>
    </MainLayout>
  );
};
export default EditDetailGroup;
