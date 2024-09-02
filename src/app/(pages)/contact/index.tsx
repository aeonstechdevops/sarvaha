"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "@/app/_components/ui/Button";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { cn, isValidEmail, isValidPhoneNumber } from "@/app/lib/utils";
import { toast } from "sonner";

const config = {
  title: "Contact Us",
  description: "Any question or remarks? Just write us a message!",
  card: {
    title: "Contact Information",
    description: "Say something to start a live chat!",
    phone: "+91 94236 93802",
    emails: ["sarvah@sggs.ac.in", "dean.iil@sggs.ac.in"],
    address: `
    Shri Guru Gobind Singhji Institute of Engineering and Technology, (SGGS I E&T), Vishnupuri,Nanded, (Maharashtra State) Pin : 431 606 [India]`,
    socials: [
      // {
      //   title: "Twitter",
      //   url: "https://x.com/Sarvah_IF",
      //   icon: <FaXTwitter />,
      // },
      {
        title: "YouTube",
        url: "https://www.youtube.com/channel/UCwWzzNHi_ltKzoYNsVpqTvA",
        icon: <IoLogoYoutube />,
      },
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com/company/sarvah-incubation%C2%A0foundation?trk=blended-typeahead",
        icon: <IoLogoLinkedin />,
      },
    ],
  },
  button: {
    text: (isSubmitting: boolean) =>
      isSubmitting ? "Sending..." : "Send Message",
  },
};

const InfoCard = () => {
  const { card } = config;
  return (
    <div className="flex flex-1 flex-col justify-between gap-4 rounded-lg bg-primary-3 p-8 text-color-1">
      <div className="flex flex-col gap-2">
        <h2 className="leading-10">{card.title}</h2>
        <p>{card.description}</p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <FaPhoneAlt size={20} />
          <Link href={`tel:${card.phone}`}>{card.phone}</Link>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <IoIosMail size={20} />
          {card.emails.map((email, idx) => (
            <Link href={`mailto:${email}`} key={idx}>
              {email}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <FaLocationDot size={30} />
          <p>{card.address}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {card.socials.map((social, idx) => (
          <Link
            href={social.url}
            target="_blank"
            className={cn(
              "rounded-full p-2 text-xl",
              idx % 2
                ? "bg-secondary-2 text-color-1"
                : "bg-color-1 text-primary-2",
            )}
            key={idx}
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

const FormCard = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstName, lastName, email, phoneNumber, message } = formData;
    // validate form data
    if (!firstName || !lastName || !email || !message) {
      toast.warning("Please fill in all fields");
      return;
    }
    // validate email and phone number
    if (!isValidEmail(email)) {
      toast.warning("Please enter a valid email");
      return;
    }
    // if (!isValidPhoneNumber(phoneNumber)) {
    //   toast.warning("Please enter a valid phone number");
    //   return;
    // }
    const body = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`;
    setIsSubmitting(true);
    fetch("/api/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body }),
    })
      .then((res) => res.json())
      .then((data) => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
        toast.success(data.message);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Error sending email");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  return (
    <div className="flex flex-1 flex-col p-6">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
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
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
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
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
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
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
              className="border-b border-gray-300 p-2 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col pb-4">
          <label htmlFor="message" className="pb-1">
            Message
          </label>
          <textarea
            placeholder="Write your message.."
            id="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="h-10 border-b border-gray-300 py-2 focus:outline-none"
          />
        </div>
        <div className="flex justify-center sm:justify-end">
          <Button type="submit">{config.button.text(isSubmitting)}</Button>
        </div>
      </form>
    </div>
  );
};

const Contact = () => {
  return (
    <section className="hero-header-pad">
      <div className="wrapper wrapper-pad flex flex-col justify-center gap-8 text-sm">
        <div className="flex flex-col items-center gap-6">
          <h1>{config.title}</h1>
          <p className="text-center text-light-text">{config.description}</p>
        </div>

        <div className="mx-auto flex w-fit flex-col items-stretch justify-between gap-6 rounded-lg border-[1px] border-black/5 p-4 shadow-md md:flex-row">
          <InfoCard />
          <FormCard />
        </div>
      </div>
    </section>
  );
};

export default Contact;
