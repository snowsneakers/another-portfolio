import Link from "next/link";
import { motion } from "framer-motion";

const success = () => {
     return (
          <motion.main
               className="flex items-center justify-center flex-col min-h-screen"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
          >
               <h1 className="text-black dark:text-white text-6xl mb-5">
                    Thank you ❤️
               </h1>
               <Link href="/">
                    <button className="bg-gray-200 dark:bg-[#2A2A2A] text-black dark:text-[#eaeaea] hover:bg-gray-300 dark:hover:bg-[#424242] transition duration-300 ease-in-out rounded px-2 py-0.5 text-md md:text-sm">
                         Return Home
                    </button>
               </Link>
          </motion.main>
     );
};

export default success;
