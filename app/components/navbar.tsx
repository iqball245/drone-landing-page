import Image from "next/image";
import Link from "next/link";
import CustomButton from "./button";
const Navbar = () => {
  return (
    <div className="flex">
      <Image src={"logo.svg"} alt="logo" width={184} height={30}></Image>
      <div className="flex items-center gap-x-[52px] list-none ml-[96px]">
        <Link href={"#"}>Home</Link>
        <Link href={"#"}>Gallery</Link>
        <Link href={"#"}>Products</Link>
        <Link href={"#"}>Reviews</Link>
        <Link href={"#"}>Support</Link>
      </div>
      <div className="flex gap-x-[8px] ml-10">
        <CustomButton variant="secondary">Sign In</CustomButton>
        <CustomButton variant="primary">Register</CustomButton>
      </div>
    </div>
  );
};

export default Navbar;
