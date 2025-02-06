import image from "../assets/loginImage.png";

const LoginPage: React.FC = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="relative w-full h-full bg-contain bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/40 before:to-black/0"
      ></div>
    </div>
  );
};

export default LoginPage;
