import LogoImage from "@/assets/logo.png";
import Image from "next/image";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="mt-12.5">
      <Image className="mx-auto mb-5 px-5 sm:px-0" width={471} height={60} src={LogoImage} alt="Logo" />

      <p className="text-[#706F6F] text-lg text-center mb-2.5">
        Journalism Without Fear or Favour
      </p>
      <p className="text-[#706F6F] text-xl text-center">
        {format(new Date(), "eeee MMMM dd yyyy")}
      </p>
    </div>
  );
};

export default Header;
