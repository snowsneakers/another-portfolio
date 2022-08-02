import { FaMoon } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
     return (
          <header className="p-3 text-[#eaeaea] flex items-center justify-between bg-[#111111]/20 backdrop-blur-md backdrop backdrop-saturate-200 sticky top-0 font-robotoMono">
               <Link href="/">
                    <h1 className="font-bold text-xl font-robotoMono tracking-tighter cursor-pointer">
                         Pat.
                    </h1>
               </Link>
               <ul className="flex items-center justify-evenly capitalize">
                    <li className="hover:bg-[#424242] transition duration-300 ease-in-out py-0.5 px-2 rounded font-bold">
                         <a href="mailto:patrickbsnowden@outlook.com">
                              contact
                         </a>
                    </li>
               </ul>
          </header>
     );
};

export default Header;
