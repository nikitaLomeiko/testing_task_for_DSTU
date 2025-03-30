import { Logo } from "components/ui/logo";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";


export const Header = () => {
  return (
    <div className="w-full bg-blue-600 py-1">
      <div className="container-sm flex flex-row items-center justify-between">
        <Logo className="text-white" />
        <nav className="flex flex-row items-center gap-3">
          <a href="#">
            <FaGithub fill="#fff" size={24}/>
          </a>
          <a href="#">
            <FaTelegram fill="#fff" size={24}/>
          </a>
        </nav>
      </div>
    </div>
  );
};
