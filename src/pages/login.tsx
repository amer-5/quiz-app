import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import loginUser from "../hooks/useLogin";
import togglePopup from "../hooks/togglePopup";

import Button from "../components/button";
import Input from "../components/input";

import Logo from "../assets/logo.svg";
import Video from "../assets/mostar.mp4";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { openPopup } = togglePopup();

  const handleLogin = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    setLoading(true);
    try {
      const { success, message, statusCode } = await loginUser(email, password);

      if (success) {
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
      setError("Došlo je do greške prilikom prijave. Pokušajte ponovo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
      <video
        src={Video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="mx-6 px-11 py-12 flex flex-col gap-4 justify-center rounded-2xl sm:overflow-hidden overflow-auto bg-white z-99">
        <div className="flex items-center justify-center">
          <img src={Logo} alt="logo" className="h-6" />
        </div>
        <h2 className="sm:text-[2rem] text-2xl font-bold">
          Prijavite se na vaš račun
        </h2>
        <p className="opacity-60 mb-8">Unesite informacije za prijavu</p>
        <form onSubmit={handleLogin} className="space-y-8">
          <Input
            inputPlaceholder="E-mail adresa"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            inputPlaceholder="Lozinka"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center justify-between">
            <p className="opacity-60">Zaboravili ste lozinku?</p>
            <Link to="/reset-pw" className="text-[#2559D2]">
              Resetuj lozinku
            </Link>
          </div>
          {error && (
            <p className="text-red-500">
              {error || "Došlo je do greške prilikom prijave"}
            </p>
          )}
          <Button
            loading={loading}
            onClick={handleLogin}
            className="w-full bg-[#2559D2] text-white rounded-[10px] py-3.5 cursor-pointer"
          >
            Prijavi se
          </Button>
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
