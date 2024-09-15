import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
    icon: React.ReactNode;
    label: string;
    href: string;
}

export const NavBtn: React.FC<Props> = ({
    icon,
    label,
    href,
}) => {
    return (
        <NavLink
        to={href}
        className={
            ({ isActive }) => isActive ? "flex flex-col items-center bg-orange-200 text-black rounded-full px-6 py-3 hover:bg-orange-300"  : "flex flex-col items-center bg-transparent text-black px-6 py-3 hover:bg-gray-100" 
        }
      >
        {icon}
        {label}
      </NavLink>
    )
}