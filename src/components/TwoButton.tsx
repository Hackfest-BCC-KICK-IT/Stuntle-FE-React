import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

type ButtonType = "button" | "submit" | "reset";

interface TwoButtonProps {
  textButton1: string;
  textButton2: string;
  route?: string;
  typeButton?: ButtonType;
  idForm?: string;
  onTapFunc?: () => void;
  isLoading: boolean;
}

const TwoButton = ({
  textButton1,
  textButton2,
  route,
  typeButton,
  idForm,
  onTapFunc,
  isLoading,
}: TwoButtonProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row my-8 w-full gap-4  items-center">
      <button
        onClick={() => navigate(-1)}
        className=" w-full md:w-[50%] h-[46px] bg-transparent  text-ms text-orange font-semibold py-2 px-4 border border-border-grey rounded-lg"
      >
        {textButton1}
      </button>

      <button
        type={typeButton}
        form={idForm}
        disabled={isLoading ? true : false}
        className=" bg-orange w-full md:w-[50%] h-[46px] text-white  rounded-lg block text-ms font-semibold "
        onClick={onTapFunc}
      >
        {isLoading ? <Loader /> : textButton2}
      </button>
    </div>
  );
};
export default TwoButton;
