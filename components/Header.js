import { FaMoon } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
     return (
          <header className="p-3 text-black dark:text-[#eaeaea] flex items-center justify-between bg-white/20 dark:bg-[#111111]/20 backdrop-blur-md backdrop backdrop-saturate-200 sticky top-0 z-10">
               <Link href="/">
                    <h1 className="font-bold text-xl tracking-tighter cursor-pointer">
                         Pat.
                    </h1>
               </Link>
               <ul className="flex items-center justify-evenly capitalize">
                    <li className="hover:bg-gray-300 dark:hover:bg-[#424242] transition duration-300 ease-in-out py-0.5 px-2 rounded font-bold">
                         <Link href="/contact">contact</Link>
                    </li>
               </ul>
          </header>
     );
};

export default Header;
