import MainLayout from "../../layout/Mainlayout";

const DataStunting = () => {
  return (
    <MainLayout>
      <section>
        <div className="h-[300px] space-y-5">
          <h1 className="heading1">Tagihan Layanan</h1>
          <h3>
            Berikut adalah tagihan dari layanan yang Anda gunakan dalam
            <br />
            memprovide fungsionalitas dari fitur-fitur dan layanan pada aplikasi
            Stuntle:
          </h3>
          <p className="font-bold">
            Tipe Layanan Anda Saat ini :{" "}
            <span className="text-light-violet">Gratis</span>
          </p>
          <p className="font-bold">
            Total Tagihan Layanan Anda Bulan ini :{" "}
            <span className="text-light-violet">Rp 0</span>
          </p>
          <button className=" bg-orange w-full md:w-[50%] h-[46px] text-white  rounded-lg block text-ms font-semibold ">
            Upgrade Layanan
          </button>
        </div>
        <div className="h-[300px] space-y-5 mt-4">
          <h1 className="heading1">Credit Chatbot</h1>
          <h3>
            Berikut adalah jumlah credit tersisa di akunmu agar pengguna yang
            terhubung
            <br />
            denganmu tetap dapat menggunakan fitur CATAS - Chat Assistant To
            Avoid Stunting:
          </h3>
          <p className="font-bold">
            Tipe Layanan Anda Saat ini :{" "}
            <span className="text-light-violet">Gratis</span>
          </p>
          <p className="font-bold">
            Sisa Credit Chatbot CATAS :{" "}
            <span className="text-light-violet">Rp 0</span>
          </p>
          <button className=" bg-orange w-full md:w-[50%] h-[46px] text-white  rounded-lg block text-ms font-semibold ">
            Top Up Credit
          </button>
        </div>
      </section>
    </MainLayout>
  );
};
export default DataStunting;
