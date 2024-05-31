import contact from "../assets/contact.jpg";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const form = useRef();
  const name = useRef("");
  const email = useRef("");
  const message = useRef("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (email.current.value && name.current.value && message.current.value) {
      emailjs
        .sendForm("service_phsiopj", "template_245bp7e", form.current, {
          publicKey: "Co0dQyc2kPHIIAK_6",
        })
        .then(
          () => {
            toast.success("Message sent successfully");
            name.current.value = "";
            email.current.value = "";
            message.current.value = "";
          },
          (error) => {
            toast.error(error.text);
          }
        );
    } else {
      toast.error("Please fill all the fields");
    }
  };
  return (
    <div id="Contact">
      <Toaster />
      <div className=" pt-6 px-6 flex flex-col gap-3 md:gap-6 md:px-20">
        <span className=" w-2/3 md:w-[25%] pb-2 text-3xl md:text-4xl text-pink-500 border-b-2 border-gray-400">
          Contact
        </span>
      </div>
      <div className=" mt-5 px-6">
        <div className="flex flex-wrap flex-row justify-around">
          <div className="lg:w-[40%]">
            <form
              ref={form}
              className="m-5 flex flex-col gap-3"
              onSubmit={sendEmail}
            >
              <label className="flex flex-col gap-3">
                <span className="text-yellow-600 font-medium mb-2">
                  Your Name
                </span>
                <input
                  ref={name}
                  type="text"
                  name="user_name"
                  placeholder="Whats your good name?"
                  className=" bg-slate-200 py-4 px-6 rounded-lg outline-none border-none font-medium "
                ></input>
              </label>

              <label className="flex flex-col gap-3">
                <span className="text-yellow-600 font-medium mb-2">
                  Your Email
                </span>
                <input
                  ref={email}
                  type="email"
                  name="user_email"
                  placeholder="Whats your web address?"
                  className=" bg-slate-200 py-4 px-6 rounded-lg outline-none border-none font-medium "
                ></input>
              </label>

              <label className="flex flex-col gap-3">
                <span className="text-yellow-600 font-medium mb-2">
                  your Message
                </span>
                <textarea
                  ref={message}
                  row={5}
                  name="message"
                  placeholder="Whats you want to say?"
                  className=" bg-slate-200 py-4 px-6 rounded-lg outline-none border-none font-medium "
                ></textarea>
              </label>

              <button
                type="submit"
                className="bg-slate-100 hover:shadow-orange-300 py-3 px-8 mb-4 m-4 border-pink-600 border-2 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-primary "
              >
                Submit
              </button>
            </form>
          </div>

          <div className="lg:w-[50%]">
            <img src={contact} alt="contact img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
