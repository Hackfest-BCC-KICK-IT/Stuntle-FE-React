import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className=" bg-orange  text-white my-5  rounded-lg block text-ms font-semibold w-[70%] h-[46px]"
    >
      Kembali
    </button>
  );
};
export default BackButton;
