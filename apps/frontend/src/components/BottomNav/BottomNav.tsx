import { FaStar } from "react-icons/fa";
import { NavBtn } from "./components/NavBtn";

const LINKS = [
  { href: "/profile", label: "Profile", icon: <FaStar /> },
  { href: "/donate", label: "Donate", icon: <FaStar /> },
  { href: "/community", label: "Community", icon: <FaStar /> },
];

export const BottomNav: React.FC = () => {
  return (
    <div className="flex justify-between gap-3 max-w p-4">
      {LINKS.map((link, idx) => (
        <NavBtn key={idx} {...link} />
      ))}
    </div>
  );
};
