import { FiSend } from "react-icons/fi";

const Form = () => {
     return (
          <section className="my-10">
               <h1 className="text-4xl text-black dark:text-white">
                    Get in touch 👋🏾
               </h1>
               <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    action="/success"
                    className="py-10 text-black dark:text-white border-b border-dashed border-[#b1b1b1]"
               >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="flex items-center justify-evenly gap-5 mb-5">
                         <div className="w-full">
                              <label htmlFor="name" className="block mb-1">
                                   Your name
                              </label>
                              <input
                                   type="text"
                                   name="name"
                                   id="name"
                                   placeholder="Name"
                                   className="p-1 w-full text-black indent-1 bg-gray-200 dark:bg-[#191919] rounded"
                                   required
                              />
                         </div>
                         <div className="w-full">
                              <label htmlFor="email" className="block mb-1">
                                   Your email
                              </label>
                              <input
                                   type="email"
                                   name="email"
                                   id="email"
                                   placeholder="Email"
                                   className="p-1 w-full text-black indent-1 bg-gray-200 dark:bg-[#191919] rounded"
                                   required
                              />
                         </div>
                    </div>
                    <div className="mb-5">
                         <label htmlFor="message" className="block mb-1">
                              Message
                         </label>
                         <textarea
                              className="w-full text-black indent-1 bg-gray-200 dark:bg-[#191919] rounded"
                              placeholder="Leave a Message"
                              rows="5"
                              cols="30"
                              name="message"
                              id="message"
                         />
                    </div>
                    <button className="bg-gray-200 dark:bg-[#191919] flex items-center justify-center py-1 px-2 w-1/2 hover:bg-gray-300 dark:hover:bg-[#424242] transition duration-300 ease-in-out rounded">
                         Send <FiSend className="ml-1" />
                    </button>
               </form>
          </section>
     );
};

export default Form;
