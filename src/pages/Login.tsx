import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputFlied from "../components/InputFlied";
import Loader from "../components/Loader";
import { useFetch } from "../hooks/useFetch";

interface FormUser {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [isWrong, setIsWrong] = useState<boolean>(false);
  const [formUser, setFormUser] = useState<FormUser>({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormUser((prevFormUser) => ({
      ...prevFormUser,
      [name]: value,
    }));
  };

  const [isLoading, data, error, formSubmit, isSuccess] = useFetch({
    method: "POST",
    url: "/faskes/login",
    data: formUser,
  });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formSubmit();
  };

  const handleLoginSuccess = () => {
    localStorage.setItem("user", JSON.stringify(data));

    navigate("/homePage");
  };

  if (isSuccess) {
    handleLoginSuccess();
  }

  useEffect(() => {
    if (Object.keys(error).length !== 0) {
      setIsWrong(true);
    }
  }, [error]);

  return (
    <main className="bg-violet h-screen flex items-center justify-center overflow-y-hidden">
      <div className="flex items-center justify-center flex-col md:flex-row gap-6 md:gap-20  ">
        <p className="text-white text-[40px] text-center md:text-start ">
          Selamat Datang Admin <br /> Layanan Kesehatan
        </p>

        {/* User Form */}
        <div className="bg-white py-16 px-14 w-[400px] md:w-[500px]">
          <p className="font-semibold mb-8 text-xl">Log in Akunmu Disini</p>
          <form onSubmit={(event) => handleFormSubmit(event)}>
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email<span className="text-dark-orange">*</span>
              </label>
              <InputFlied
                value={formUser.email}
                onChangeValue={handleInputChange}
                name="email"
              />
            </div>
            {/* Password Field */}
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2">
                Password<span className="text-dark-orange">*</span>
              </label>
              <InputFlied
                value={formUser.password}
                onChangeValue={handleInputChange}
                name="password"
              />
            </div>
            <button
              type="submit"
              className="bg-orange text-white  w-full block px-6 py-4 rounded-lg"
              disabled={isLoading}
            >
              {isLoading ? <Loader /> : "Masuk"}
            </button>
          </form>

          {/*Wrong message */}
          {isWrong ? (
            <p className="text-center text-red font-semibold my-3">
              Email atau Password Anda Salah
            </p>
          ) : null}

          <p className="text-center font-normal mt-6 text-sm">
            Belum Punya Akun?{" "}
            <Link to={"/register"}>
              <span className="text-light-violet">Daftar Sekarang</span>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
