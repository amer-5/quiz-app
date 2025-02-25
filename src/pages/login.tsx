import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import loginUser from "../hooks/useLogin";
import togglePopup from "../hooks/togglePopup";

import Auth from "../components/auth";
import AuthButton from "../components/authButton";
import Button from "../components/button";
import Input from "../components/input";

import googleIco from "../assets/icons/google.png";
import Logo from "../assets/logo.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const { openPopup } = togglePopup();

  const handleLogin = async () => {
    try {
      const { success, message, statusCode } = await loginUser(email, password);

      if (success) {
        console.log(message);
        navigate("/");
        openPopup();
      } else {
        if (statusCode === 404) {
          setError("Korisnik sa ovom e-mail adresom nije pronađen.");
        } else if (statusCode === 401) {
          setError("Netačna lozinka. Pokušajte ponovo.");
        } else {
          setError(message || "Došlo je do greške prilikom prijave.");
        }
      }
    } catch (error) {
      console.error(error);
      setError("Došlo je do greške prilikom prijave. Pokušajte ponovo.");
    }
  };

  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <Auth />
      <div className="w-3/7 px-[3.75rem] py-24">
        <img src={Logo} alt="logo" className="w-24 mb-6" />
        <h2 className="text-[2rem] font-bold">Prijavite se na vaš račun</h2>
        <p className="opacity-60 mb-10">Unesite informacije za prijavu</p>
        <AuthButton providerImg={googleIco} providerName="Google" />
        <p className="opacity-40 text-center font-light my-6">ili</p>
        <div className="space-y-8 my-6">
          <Input
            inputPlaceholder="E-mail adresa"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            inputPlaceholder="Lozinka"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between mb-12">
          <p className="opacity-60">Zaboravili ste lozinku?</p>
          <Link to="/reset-pw" className="text-[#2559D2]">
            Resetuj lozinku
          </Link>
        </div>
        {error && (
          <p className="text-red-500 mb-4">
            {error && "Došlo je do greške prilikom prijave"}
          </p>
        )}
        <Button
          buttonText="Prijavi se"
          onClick={handleLogin}
          className="w-full bg-[#2559D2] text-white rounded-[10px] py-3.5 my-4 cursor-pointer"
        />
        <div className="flex items-center justify-center gap-2">
          <p className="opacity-60">Nemate račun?</p>
          <Link to="/register" className="text-[#2559D2]">
            Registruj se
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
