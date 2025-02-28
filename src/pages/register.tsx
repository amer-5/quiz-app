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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
        firstName,
        lastName,
        username
      );

      if (success) {
        navigate("/");
        openPopup();
      } else {
        setError(message || "Došlo je do greške prilikom registracije.");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <Auth />
      <div className="w-3/7 px-[3.75rem] py-24">
        <img src={Logo} alt="logo" className="w-24 mb-6" />
        <h2 className="text-[2rem] font-bold">Registrujte se na Quiz BiH</h2>
        <p className="opacity-60 mb-10">Popunite informacije za registraciju</p>
        <AuthButton providerImg={googleIco} providerName="Google" />
        <p className="opacity-40 text-center font-light my-6">ili</p>
        <form onSubmit={handleRegister} className="space-y-8 my-6">
          <Input
            inputPlaceholder="Korisničko ime"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            inputPlaceholder="Ime"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            inputPlaceholder="Prezime"
            onChange={(e) => setLastName(e.target.value)}
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
              {error && "Došlo je do greške prilikom registracije"}
            </p>
          )}
          <Button
            buttonText="Registruj se"
            loading={loading}
            onClick={handleRegister}
            className="w-full bg-[#2559D2] text-white rounded-[10px] py-3.5 my-4 mt-14 cursor-pointer"
          />
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
