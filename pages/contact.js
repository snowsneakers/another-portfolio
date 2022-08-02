import Form from "../components/Form";
import Header from "../components/Header";
import Socials from "../components/Socials";
const Contact = () => {
     return (
          <main className="container-xl w-full md:w-[880px] mx-auto md:px-0">
               <Header />
               <div className="px-5 md:px-0">
                    <Form />
                    <Socials />
               </div>
          </main>
     );
};

export default Contact;
