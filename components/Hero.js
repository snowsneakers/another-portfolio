import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import Link from "next/link";
const Hero = () => {
     return (
          <section className="container-xl flex justify-center text-[#eaeaea] tracking-tighter">
               <div className="border-b border-dashed border-[#b1b1b1] my-10 pb-10 px-5 md:px-0">
                    <h1 className="text-4xl md:text-6xl  mb-10">
                         Software Engineer
                         <br />
                         solving problems
                         <br />
                         through colaboration.
                    </h1>
                    <p className="mb-10 text-[#b1b1b1] leading-7">
                         👋🏾 I am Pat, a Ventura County based software engineer.
                         I have always had two loves, computing and the human
                         body. I studied exercise science and became fascinated
                         with biomechanics. Throughout undergrad and after
                         graduation, I worked as a basketball coach. I used
                         basketball to not only improve my leadership and
                         communication skills but also to explore biomechanics.
                         I focused primarily on teaching athletes optimal form.
                         Unfortunately, the pandemic shut down most sports
                         leagues. During that time, I decided to switch gears
                         and explore that other passion, computing. I can now
                         combine these two passions and bring a lot to a team.
                         Not only in terms of the technology but also with my
                         experience in biomechanics and working with athletes.{" "}
                    </p>
                    <ul className="flex items-center justify-between w-48 text-[#b1b1b1]">
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
                         <li>
                              <button
                                   className="bg-[#2A2A2A] hover:bg-[#424242] transition duration-300 ease-in-out rounded-full px-2 py-0.5 text-md md:text-sm"
                                   onClick={() => alert("Coming soon!")}
                              >
                                   Resume
                              </button>
                         </li>
                    </ul>
               </div>
          </section>
     );
};

export default Hero;
