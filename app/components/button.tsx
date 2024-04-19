import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const CustomButton: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  let className = "px-[32px] py-[16px] rounded-[39px]";
  if (variant === "primary") {
    className += " bg-[#315BC7] text-white";
  } else if (variant === "secondary") {
    className += " bg-gray-transparent text-[#315BC7]";
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
