import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import usePopup from "../hooks/togglePopup";
import registerUser from "../hooks/useRegister";

import Button from "../components/button";
import Input from "../components/input";

import Logo from "../assets/logo.svg";
import Video from "../assets/mostar.mp4";

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
    <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
      <video
        src={Video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="sm:aspect-[4/5] sm:h-[70vh] mx-6 px-11 py-12 flex flex-col gap-4 justify-center rounded-2xl sm:overflow-hidden overflow-auto bg-white z-99">
        <div className="flex items-center justify-center">
          <img src={Logo} alt="logo" className="h-6" />
        </div>
        <h2 className="sm:text-[2rem] text-2xl font-bold">
          Registrujte se na Quiz BiH
        </h2>
        <p className="opacity-60 mb-8">Popunite informacije za registraciju</p>
        <form onSubmit={handleRegister} className="space-y-8">
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
            <p className="text-red-500">
              {error || "Došlo je do greške prilikom registracije"}
            </p>
          )}
          <Button
            loading={loading}
            onClick={handleRegister}
            className="w-full bg-[#2559D2] text-white rounded-[10px] py-3.5 cursor-pointer"
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
