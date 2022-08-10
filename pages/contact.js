import Form from "../components/Form";
import Header from "../components/Header";
import Socials from "../components/Socials";
import { motion } from "framer-motion";
const Contact = () => {
     return (
          <motion.main
               className="container-xl w-full md:w-[880px] mx-auto md:px-0"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
          >
               <Header />
               <div className="px-5 md:px-0">
                    <Form />
                    <Socials />
               </div>
          </motion.main>
     );
};

export default Contact;
