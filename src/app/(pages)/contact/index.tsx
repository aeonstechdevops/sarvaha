import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/_components/ui/Button";

const config = {
  title: "Contact Us",
  description: "Any question or remarks? Just write us a message!",
  title2: "Contact Information",
  description2: "Say something to start a live chat!",
  phone: "+1012 3456 789",
  email: "demo@gmail.com",
  address: "132 Dartmouth Street Boston, Massachusetts 02156 United States",
  phoneUrl: "/images/pages/contact/phone.png",
  emailUrl: "/images/pages/contact/email.png",
  addressUrl: "/images/pages/contact/location.png",
  letterSendUrl: "/images/pages/contact/letter_send.png",
  twitterUrl: "/images/pages/contact/twitter.png",
  instagramUrl: "/images/pages/contact/instagram.png",
  discordUrl: "/images/pages/contact/discord.png",
  button: {
    text: "Send Message",
    url: "/",
  },
};

const Contact = () => {
  return (
    <div className=" wrapper wrapper-pad my-20 flex flex-col justify-center text-sm">
      <div className="">
        <h1 className="pb-4 text-center text-3xl md:text-4xl">
          {config.title}
        </h1>
        <p className="text-center text-light-text">{config.description}</p>
      </div>

      <div className="xl:mx-25 my-10 flex flex-col rounded-lg p-2 shadow-lg md:mx-20 lg:flex-row">
        <div className=" flex flex-col rounded-lg bg-primary-3 p-10 px-8 py-7  text-white md:px-12 lg:w-2/5 lg:px-9">
          <h3 className="pb-4 text-3xl md:text-4xl">{config.title2}</h3>
          <p className="pb-16">{config.description2}</p>
          <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-4">
              <img className="h-6 w-6" src={config.phoneUrl} alt="1" />
              <p>{config.phone}</p>
            </div>
            <div className="flex flex-row gap-4">
              <img className="h-6 w-6" src={config.emailUrl} alt="2" />
              <p>{config.email}</p>
            </div>
            <div className="flex flex-row gap-4">
              <img className="h-6 w-6" src={config.addressUrl} alt="3" />
              <p>{config.address}</p>
            </div>
          </div>
          <div className="mt-20 flex flex-row gap-4">
            <img className="h-7 w-7" src={config.twitterUrl} alt="1" />
            <img className="h-7 w-7" src={config.instagramUrl} alt="2" />
            <img className="h-7 w-7" src={config.discordUrl} alt="3" />
          </div>
        </div>
        <div className=" xl:px-30 flex flex-col px-4 py-10 md:p-10 md:px-16 lg:w-3/5 lg:py-10">
          <form className="">
            <div className="mb-4 grid grid-cols-1 gap-4 pb-4 md:grid-cols-2">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="border-b border-gray-300 p-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName" className="">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="border-b border-gray-300 p-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border-b border-gray-300 p-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phoneNumber" className="">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="border-b border-gray-300 p-2 focus:outline-none"
                />
              </div>
            </div>
            <div className=" mb-4 flex flex-col pb-6">
              <p className="mb-2">Select Subject:</p>
              <div className="flex flex-wrap gap-5">
                <label
                  htmlFor="subject1"
                  className="cursor-pointer flex items-center gap-1 md:gap-2 lg:gap-1"
                >
                  <input type="radio" id="subject1" name="SelectSubject" />
                  General Enquiry
                </label>
                <label
                  htmlFor="subject2"
                  className="cursor-pointer flex items-center gap-1 md:gap-2 lg:gap-1"
                >
                  <input type="radio" id="subject2" name="SelectSubject" />
                  General Enquiry
                </label>
                <label
                  htmlFor="subject3"
                  className="cursor-pointer flex items-center gap-1 md:gap-2 lg:gap-1"
                >
                  <input type="radio" id="subject3" name="SelectSubject" />
                  General Enquiry
                </label>
                <label
                  htmlFor="subject4"
                  className="cursor-pointer flex items-center gap-1 md:gap-2 lg:gap-1"
                >
                  <input type="radio" id="subject4" name="SelectSubject" />
                  General Enquiry
                </label>
              </div>
            </div>
            <div className="mb-4 flex flex-col pb-4">
              <label htmlFor="message" className="pb-1">
                Message
              </label>
              <textarea
                placeholder="Write your message.."
                id="message"
                className="h-10 border-b border-gray-300 py-2 focus:outline-none"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <Link href={config.button.url} className="flex w-fit">
                <Button>{config.button.text}</Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
