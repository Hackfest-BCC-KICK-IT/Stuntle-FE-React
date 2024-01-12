import {
  HomepageDataChild,
  HomepageDataPrenangcy,
  HomepageDataUmum,
} from "../constant/homepage";
import useLocalStorage from "../hooks/useLocalStorage";
import MainLayout from "../layout/Mainlayout";

const Homepage = () => {
  const [userData] = useLocalStorage("user");
  return (
    <MainLayout>
      <section>
        <div>
          <h1 className="heading1">Selamat Datang Di DashBoard Admin</h1>
          <h3 className="text-2xl font-medium my-6">
            Kode Unikmu :{" "}
            <span className="text-light-violet">{userData.data.kodeUnik}</span>
          </h3>
          <h3 className="text-2xl font-medium">
            Sisa Credit Chatbot CATAS:{" "}
            <span className="text-light-violet">Rp 0</span>
          </h3>
        </div>
        {/*Common Data */}
        <h2 className="heading1 mt-10 mb-2">Dashboard Umum</h2>
        <div className=" flex flex-rown flex-wrap gap-4">
          {HomepageDataUmum.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col p-5 my-4 w-[264px] h-[160px] items-center justify-center border-2 border-solid border-light-violet rounded-md">
                <h4 className="text-center text-7xl text-orange font-semibold mb-1">
                  {item.data}
                </h4>
                <div className="text-base text-center px-1 font-semibold w-[232px]">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*Prenangcy Data */}
        <h2 className="heading1 mt-10 mb-2">Dashboard Ibu Hamil</h2>
        <div className=" flex flex-rown flex-wrap gap-4">
          {HomepageDataPrenangcy.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col p-5 my-4 w-[264px] h-[160px] items-center justify-center border-2 border-solid border-light-violet rounded-md">
                <h4 className="text-center text-7xl text-orange font-semibold mb-1">
                  {item.data}
                </h4>
                <div className="text-base text-center px-1 font-semibold w-[232px]">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*Child Data */}
        <h2 className="heading1 mt-10 mb-2">Dashboard Bayi & Anak</h2>
        <div className=" flex flex-rown flex-wrap gap-4">
          {HomepageDataChild.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col p-5 my-4 w-[264px] h-[160px] items-center justify-center border-2 border-solid border-light-violet rounded-md">
                <h4 className="text-center text-7xl text-orange font-semibold mb-1">
                  {item.data}
                </h4>
                <div className="text-base text-center px-1 font-semibold w-[232px]">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};
export default Homepage;
