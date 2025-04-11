import { GithubIcon, LinkedinIcon } from "lucide-react";

function Navbar() {
  return (
    <header className="h-14 px-4 flex items-center justify-between">
      <ul className="flex items-center gap-6">
        <li className="font-geistbold text-base">
          <a href="#home">Shaik_Aaron</a>
        </li>
        <li className="font-geistmedium text-sm">
          <a href="#about">About</a>
        </li>
        <li className="font-geistmedium text-sm">
          <a href="#experience">Experience</a>
        </li>
        <li className="font-geistmedium text-sm">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <ul className="flex items-center gap-6">
        <GithubIcon size={16} />
        <LinkedinIcon size={16} />
      </ul>
    </header>
  );
}

export default Navbar;
