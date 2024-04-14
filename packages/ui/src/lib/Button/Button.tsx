import React from "react";

/* eslint-disable-next-line */
export interface ButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({ variant = "primary", children }: ButtonProps) {
  
  const classNames = {
    primary:
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
    secondary:
      "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",
  }[variant]

  return <button className={classNames}>{children}</button>;
}

export default Button;
