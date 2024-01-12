import { Link } from "react-router-dom";
import MainLayout from "../../layout/Mainlayout";

const RecipesArticle = () => {
  return (
    <MainLayout>
      <section className="ml-[20px] mt-[35px] mr-[20px]">
        <h1 className="heading1 mb-5">Menu Upload Resep Makanan & Artikel</h1>
        <div className="my-3 py-2 px-4 border border-border-grey rounded-lg flex flex-col sm:flex-row justify-between items-center">
          <p className="mb-2 sm:mb-0 sm:mr-4">Menu Resep Makanan</p>
          <Link to={"/menuRecipes"}>
            <button
              type="button"
              className="text-light-violet outline-none mt-2 sm:mt-0"
            >
              Lihat Menu
            </button>
          </Link>
        </div>
        <div className="my-3 py-2 px-4 border border-border-grey rounded-lg flex flex-col sm:flex-row justify-between items-center">
          <p className="mb-2 sm:mb-0 sm:mr-4">Menu Artikel</p>
          <Link to={"/menuArticle"}>
            <button
              type="button"
              className="text-light-violet outline-none mt-2 sm:mt-0"
            >
              Lihat Menu
            </button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};
export default RecipesArticle;
