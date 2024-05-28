import React from "react";
import contact from "../assets/contact.jpg";

function Contact() {
  return (
    <div id="Contact">
      <div className=" pt-6 px-6 flex flex-col gap-3 md:gap-6 md:px-20">
        <span className=" w-2/3 md:w-[25%] pb-2 text-3xl md:text-4xl text-pink-500 border-b-2 border-gray-400">
          Contact
        </span>
      </div>
      <div className=" mt-5 px-6">
        <div className="flex flex-wrap flex-row justify-around">
          <div className="lg:w-[40%]">
            <form className="m-5 flex flex-col gap-3">
              <label className="flex flex-col gap-3">
                <span className="text-yellow-600 font-medium mb-2">
                  Your Name
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Whats your good name?"
                  className=" bg-slate-200 py-4 px-6 rounded-lg outline-none border-none font-medium "
                ></input>
              </label>

              <label className="flex flex-col gap-3">
                <span className="text-yellow-600 font-medium mb-2">
                  Your Email
                </span>
                <input
                  type="email"
                  name="eamil"
                  placeholder="Whats your web address?"
                  className=" bg-slate-200 py-4 px-6 rounded-lg outline-none border-none font-medium "
                ></input>
              </label>

              <label className="flex flex-col gap-3">
                <span className="text-yellow-600 font-medium mb-2">
                  your Message
                </span>
                <textarea
                  row={5}
                  name="text"
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
