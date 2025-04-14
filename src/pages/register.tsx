import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import usePopup from "../hooks/togglePopup";
import registerUser from "../hooks/useRegister";

import Auth from "../components/auth";
import AuthButton from "../components/authButton";
import Button from "../components/button";
import Input from "../components/input";

import googleIco from "../assets/icons/google.png";
import Logo from "../assets/logo.svg";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { openPopup } = usePopup();

  const handleRegister = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    setLoading(true);
    try {
      const { success, message } = await registerUser(
        email,
        password,
        username
      );
      if (success) {
        navigate("/");
        openPopup();
      } else {
        setError(message || "Došlo je do greške prilikom registracije.");
      }
    } catch (error) {
      setError("Došlo je do greške prilikom registracije. Pokušajte ponovo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <div className="sm:block hidden">
        <Auth />
      </div>
      <div className="sm:w-2/6 w-screen sm:px-[3.75rem] px-8 py-24 sm:overflow-hidden overflow-auto">
        <img src={Logo} alt="logo" className="w-24 sm:mb-6 mb-8" />
        <h2 className="sm:text-[2rem] text-2xl font-bold">
          Registrujte se na Quiz BiH
        </h2>
        <p className="opacity-60 mb-10">Popunite informacije za registraciju</p>
        <AuthButton providerImg={googleIco} providerName="Google" />
        <p className="opacity-40 text-center font-light my-6">ili</p>
        <form onSubmit={handleRegister} className="space-y-8 my-6">
          <Input
            inputPlaceholder="Korisničko ime"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            inputPlaceholder="E-mail adresa"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            inputPlaceholder="Lozinka"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <p className="text-red-500 mb-4">
              {error || "Došlo je do greške prilikom registracije"}
            </p>
          )}
          <Button
            loading={loading}
            onClick={handleRegister}
            className="w-full bg-[#2559D2] text-white rounded-[10px] py-3.5 my-4 mt-14 cursor-pointer"
          >
            Registruj se
          </Button>
        </form>
        <div className="flex items-center justify-center gap-2">
          <p className="opacity-60">Već imate račun?</p>
          <Link to="/login" className="text-[#2559D2]">
            Prijavi se
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
