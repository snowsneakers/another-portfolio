import Link from "next/link";

const success = () => {
     return (
          <section className="flex items-center justify-center flex-col min-h-screen">
               <h1 className="text-black dark:text-[#b1b1b1] text-6xl mb-5">
                    Thank you ❤️
               </h1>
               <Link href="/">
                    <button className="bg-gray-200 dark:bg-[#2A2A2A] hover:bg-gray-300 dark:hover:bg-[#424242] transition duration-300 ease-in-out rounded px-2 py-0.5 text-md md:text-sm">
                         Return Home
                    </button>
               </Link>
          </section>
     );
};

export default success;
