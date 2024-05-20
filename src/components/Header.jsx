import { NavBar } from "./NavBar";
import logo from "../assets/images/logo.png";

export const Header = () => {
  return (
    <header className="bg-OffWhite flex place-content-between h-[100px]  items-center w-full">
      <img className="w-[50px] ml-4" src={logo} alt="" />
      <NavBar />
    </header>
  );
};
