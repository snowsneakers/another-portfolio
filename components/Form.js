import { FiSend } from "react-icons/fi";

const Form = () => {
     return (
          <section className="my-10">
               <h1 className="text-4xl text-white">Get in touch 👋🏾</h1>
               <form className="py-10 text-white border-b border-dashed">
                    <div className="flex items-center justify-evenly gap-5 mb-5">
                         <div className="w-full">
                              <label htmlFor="name" className="block">
                                   Your name
                              </label>
                              <input
                                   type="text"
                                   name="name"
                                   placeholder="Name"
                                   className="p-1 w-full text-black indent-1 bg-[#191919]"
                                   required
                              />
                         </div>
                         <div className="w-full">
                              <label htmlFor="email" className="block">
                                   Your email
                              </label>
                              <input
                                   type="email"
                                   name="email"
                                   placeholder="Email"
                                   className="p-1 w-full text-black indent-1 bg-[#191919]"
                                   required
                              />
                         </div>
                    </div>
                    <div className="mb-5">
                         <label htmlFor="message">Message</label>
                         <textarea
                              className="w-full text-black indent-1 bg-[#191919]"
                              placeholder="Leave a Message"
                              rows="5"
                              cols="30"
                              name="message"
                         />
                    </div>
                    <button className="bg-[#191919] flex items-center justify-center py-1 px-2 w-1/2 hover:bg-[#424242] transition duration-300 ease-in-out">
                         Send <FiSend className="ml-1" />
                    </button>
               </form>
          </section>
     );
};

export default Form;
