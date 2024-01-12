import FliedPrenaghcyInput from "../../components/FliedPrenaghcyInput";
import MainLayout from "../../layout/Mainlayout";

const Profil = () => {
  return (
    <MainLayout>
      <section className="ml-[20px] mt-[35px] mr-[20px]">
        <h1 className="heading1 mb-5">Profil Saya</h1>
        <FliedPrenaghcyInput
          heading="Nama Fasilitas Kesehatan"
          subtext=""
          child={
            <input
              type="text"
              className="w-full relative p-2 border border-border-grey rounded-md mt-2  pr-10"
              placeholder="Puskesmas Kota Lumut"
            />
          }
        />
        <FliedPrenaghcyInput
          heading="Alamat Fasilitas Kesehatan"
          subtext=""
          child={
            <input
              type="text"
              className="w-full relative p-2 border border-border-grey rounded-md mt-2  pr-10"
              placeholder="Jalan Lumut No. 10, Kecamatan Lumut, Kota Lumut, Tapanuli Selatan"
            />
          }
        />
        <FliedPrenaghcyInput
          heading="Kode Unik"
          subtext=""
          child={
            <input
              type="text"
              className="w-full relative p-2 border border-border-grey rounded-md mt-2  pr-10"
              placeholder="1234567890"
            />
          }
        />
        <FliedPrenaghcyInput
          heading="Nomor Telepon"
          subtext=""
          child={
            <input
              type="text"
              className="w-full relative p-2 border border-border-grey rounded-md mt-2  pr-10"
              placeholder="081234567890"
            />
          }
        />
        <FliedPrenaghcyInput
          heading="Email"
          subtext=""
          child={
            <input
              type="text"
              className="w-full relative p-2 border border-border-grey rounded-md mt-2  pr-10"
              placeholder="puskesmaslumut@email.com"
            />
          }
        />
      </section>
    </MainLayout>
  );
};
export default Profil;
