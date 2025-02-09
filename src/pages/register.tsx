import { Link } from "react-router-dom";

import Auth from "../components/auth";
import AuthButton from "../components/authButton";
import Button from "../components/button";
import Input from "../components/input";

import googleIco from "../assets/icons/google.png";
import Logo from "../assets/logo.svg";

const Register = () => {
  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <Auth />
      <div className="w-3/7 px-[3.75rem] py-24">
        <img src={Logo} alt="logo" className="w-24 mb-6" />
        <h2 className="text-[2rem] font-bold">Registrujte se na Quiz BiH</h2>
        <p className="opacity-60 mb-10">Popunite informacije za registraciju</p>
        <AuthButton providerImg={googleIco} providerName="Google" />
        <p className="opacity-40 text-center font-light my-6">ili</p>
        <div className="space-y-8 my-6">
          <Input inputPlaceholder="E-mail adresa" />
          <Input inputPlaceholder="Korisničko ime" />
          <Input inputPlaceholder="Lozinka" type="password" />
          <Input inputPlaceholder="Ponovite Lozinku" type="password" />
        </div>
        <Button
          buttonText="Registruj se"
          className="w-full bg-[#2559D2] text-white rounded-[10px] py-3.5 my-4 mt-14 cursor-pointer"
        />
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
