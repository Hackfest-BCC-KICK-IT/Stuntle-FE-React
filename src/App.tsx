import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddData from "./pages/check up data/AddData";
import RecipesArticle from "./pages/recipes and articel/RecipesArticle";
import WaGruop from "./pages/Wagroup/WaGruop";
import ParentProfile from "./pages/check up data/ParentProfile";
import PrenagcyData from "./pages/check up data/PrenagcyData";
import InputPrenagcyData from "./pages/check up data/InputPrenagcyData";
import ChildData from "./pages/check up data/ChildData";
import InputChildData from "./pages/check up data/InputChildData";
import Login from "./pages/Login";
import PermintaanBantuan from "./pages/request help/PermintaanBantuan";
import Profil from "./pages/profile/Profil";
import Homepage from "./pages/Homepage";
import DetailWaGroup from "./pages/Wagroup/DetailWaGroup";
import EditDetailGroup from "./pages/Wagroup/EditDetailGroup";
import AddWaGroup from "./pages/Wagroup/AddWaGroup";
import MenuRecipes from "./pages/recipes and articel/MenuRecipes";
import AddRecipes from "./pages/recipes and articel/AddRecipes";
import DetailRecipes from "./pages/recipes and articel/DetailRecipes";
import MenuArticel from "./pages/recipes and articel/MenuArticel";
import AddArticel from "./pages/recipes and articel/AddArticel";
import DetailArticel from "./pages/recipes and articel/DetailArticel";
import ListHelp from "./pages/request help/ListHelp";
import DetailHelp from "./pages/request help/DetailHelp";
import Register from "./pages/Register";
import DataStunting from "./pages/data_stunting/DataStunting";
import Tagihan from "./pages/tagihan/Tagihan";
import ProfilBayi from "./pages/check up data/components/ProfilBayi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homePage" element={<Homepage />} />
        <Route path="/addData" element={<AddData />} />
        <Route path="/resepMakanan" element={<RecipesArticle />} />
        <Route path="/menuRecipes" element={<MenuRecipes />} />
        <Route path="/addRecipes" element={<AddRecipes />} />
        <Route path="/detailRecipes" element={<DetailRecipes />} />
        <Route path="/menuArticle" element={<MenuArticel />} />
        <Route path="/addArticle" element={<AddArticel />} />
        <Route path="/detailArticle" element={<DetailArticel />} />
        <Route path="/waGruop" element={<WaGruop />} />
        <Route path="/detailWaGruop" element={<DetailWaGroup />} />
        <Route path="/editDetailWaGruop" element={<EditDetailGroup />} />
        <Route path="/addDetailWaGruop" element={<AddWaGroup />} />
        <Route path="/parentProfile" element={<ParentProfile />} />
        <Route path="/prenagcyData" element={<PrenagcyData />} />
        <Route path="/inputPrenagcyData" element={<InputPrenagcyData />} />
        <Route path="/childData" element={<ChildData />} />
        <Route path="/inputChildData" element={<InputChildData />} />
        <Route path="/permintaanBantuan" element={<PermintaanBantuan />} />
        <Route path="/listHelp" element={<ListHelp />} />
        <Route path="/detailHelp" element={<DetailHelp />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/dataStunting" element={<DataStunting />} />
        <Route path="/tagihan" element={<Tagihan />} />
        <Route path="/profilCalonBayi" element={<ProfilBayi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
