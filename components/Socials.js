import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Socials = () => {
     return (
          <section>
               <h3 className="text-white text-2xl mb-3">
                    Other Ways to Contact Me
               </h3>
               <ul className="flex items-center justify-between w-36 text-[#b1b1b1]">
                    <li className="cursor-pointer text-xl hover:scale-105 transition duration-300 ease-in-out">
                         <a
                              href="https://github.com/snowsneakers"
                              target="_blank"
                              rel="noreferrer"
                         >
                              <FaGithub />
                         </a>
                    </li>
                    <li className="cursor-pointer text-xl hover:scale-105 transition duration-300 ease-in-out">
                         <a
                              href="https://www.linkedin.com/in/patricksnowden/"
                              target="_blank"
                              rel="noreferrer"
                         >
                              <FaLinkedin />
                         </a>
                    </li>
                    <li className="cursor-pointer text-xl hover:scale-110 transition duration-300 ease-in-out">
                         <a
                              href="https://twitter.com/snowsneakers_"
                              target="_blank"
                              rel="noreferrer"
                         >
                              <FaTwitterSquare />
                         </a>
                    </li>
               </ul>
          </section>
     );
};

export default Socials;
