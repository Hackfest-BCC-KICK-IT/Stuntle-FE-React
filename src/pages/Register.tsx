import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputFlied from "../components/InputFlied";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";

interface FormUser {
  namaFaskes: string;
  email: string;
  password: string;
  alamatFasilitas: string;
  nomorTelepon: string;
}

const Register = () => {
  const navigate = useNavigate();
  const [formUser, setFormUser] = useState<FormUser>({
    namaFaskes: "",
    email: "",
    password: "",
    alamatFasilitas: "",
    nomorTelepon: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormUser({ ...formUser, [name]: value });
  };

  const [isLoading, data, error, formSubmit, isSuccess] = useFetch({
    method: "POST",
    url: "/faskes",
    data: formUser,
  });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formSubmit();
  };

  if (isSuccess) {
    navigate("/");
  }

  return (
    <main className="bg-violet h-screen flex items-center justify-center">
      <section className="flex items-center justify-center  flex-col md:flex-row gap-4 md:gap-20 overflow-y-hidden ">
        <p className="text-white text-[40px] mt-9 md:mt-0">Registrasi Akun</p>

        {/* User Form */}
        <div className="bg-white mt-4 py-5 px-14 w-[400px] md:w-[500px]">
          <form onSubmit={(event) => handleFormSubmit(event)}>
            {/* NameFaskes Field */}
            <div className="mb-4">
              <label htmlFor="namaFaskes" className="block mb-2">
                Nama Faskes<span className="text-dark-orange">*</span>
              </label>
              <InputFlied
                value={formUser.namaFaskes}
                onChangeValue={handleInputChange}
                name="namaFaskes"
              />
            </div>
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
            {/* Alamat Fasilitas Field */}
            <div className="mb-4">
              <label htmlFor="alamatFasilitas" className="block mb-2">
                Alamat Fasilitas<span className="text-dark-orange">*</span>
              </label>
              <InputFlied
                value={formUser.alamatFasilitas}
                onChangeValue={handleInputChange}
                name="alamatFasilitas"
              />
            </div>
            {/* No Telepon Faskes Field */}
            <div className="mb-4">
              <label htmlFor="nomorTelepon" className="block mb-2">
                No Telepon Faskes<span className="text-dark-orange">*</span>
              </label>
              <InputFlied
                value={formUser.nomorTelepon}
                onChangeValue={handleInputChange}
                name="nomorTelepon"
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
          <p className="text-center font-normal my-6 text-sm">
            Sudah Punya Akun?{" "}
            <Link to={"/"}>
              <span className="text-light-violet">Login Sekarang</span>
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};
export default Register;
