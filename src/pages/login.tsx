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
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { openPopup } = togglePopup();

  const handleLogin = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault(); // Spriječite defaultno ponašanje forme
    }
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <div className="sm:block hidden">
        <Auth />
      </div>
      <div className="sm:w-3/7 w-screen sm:px-[3.75rem] px-8 py-24 sm:overflow-hidden overflow-auto">
        <img src={Logo} alt="logo" className="w-24 sm:mb-6 mb-8" />
        <h2 className="sm:text-[2rem] text-2xl font-bold">Prijavite se na vaš račun</h2>
        <p className="opacity-60 mb-10">Unesite informacije za prijavu</p>
        <AuthButton providerImg={googleIco} providerName="Google" />
        <p className="opacity-40 text-center font-light my-6">ili</p>
        <form onSubmit={handleLogin} className="space-y-8 my-6">
          <Input
            inputPlaceholder="E-mail adresa"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            inputPlaceholder="Lozinka"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
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
            loading={loading}
            onClick={handleLogin}
            className="w-full bg-[#2559D2] text-white rounded-[10px] py-3.5 my-4 cursor-pointer"
          >Prijavi se</Button>
        </form>
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
