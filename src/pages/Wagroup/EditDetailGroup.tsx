import { useLocation } from "react-router-dom";
import FliedPrenaghcyInput from "../../components/FliedPrenaghcyInput";
import InputFlied from "../../components/InputFlied";
import TwoButton from "../../components/TwoButton";
import MainLayout from "../../layout/Mainlayout";

const EditDetailGroup = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const valueTextUser1 = queryParams.get("valueText1") || "";
  const valueTextUser2 = queryParams.get("valueText2") || "";
  return (
    <MainLayout>
      <section>
        <h1 className="heading1 mb-5 text-center">Edit Grup</h1>
        <div>
          <FliedPrenaghcyInput
            heading="Nama Grup*"
            subtext="Pastikan Anda memasukkan nama grup yang benar dan tidak mengandung SARA"
            child={<InputFlied value={valueTextUser1} />}
          />
          <FliedPrenaghcyInput
            heading="Link Grup Whatsapp*"
            subtext="Pastikan link url dari grup whatsapp yang Anda masukkan valid, dan bisa di join oleh orang tua"
            child={<InputFlied value={valueTextUser2} />}
          />
        </div>
        <TwoButton
          textButton1="Batalkan Tambah Grup"
          textButton2="Tambahkan Grup"
          route="/waGruop"
        />
      </section>
    </MainLayout>
  );
};
export default EditDetailGroup;
