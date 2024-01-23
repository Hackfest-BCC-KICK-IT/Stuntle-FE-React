import MainLayout from "../../layout/Mainlayout";

const DataStunting = () => {
  return (
    <MainLayout>
      <section>
        <h1 className="heading1">API Data Stunting Saya</h1>
        <h3 className="font-normal text-xl text-light-violet my-5">
          Perhatian! API ini hanya akan memberikan informasi numerik untuk
          pemetaan kondisi stunting di daerahmu sehingga data pribadi pasien,
          seperti nama, umur, nomor telepon tidak akan dibagikan!
        </h3>
        <p className="text-lg font-bold">
          <span className="mr-2">API:</span>
          <a href="#" className="hover:cursor-pointer text-blue-700 underline">
            api.stuntle.1234567890.puskemaskotalumur.netlify.app
          </a>
        </p>
      </section>
    </MainLayout>
  );
};
export default DataStunting;
