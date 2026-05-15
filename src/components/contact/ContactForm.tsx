"use client";

import { motion } from "motion/react";
import { AnimatedLink } from "../ui/AnimatedLink";
import { useCreateEmailRequest } from "@/hooks/useUser";
import React, { useState } from "react";
import ToasterProvider from "../ToasterProvider";

export default function ContactForm() {
  const mutationEmailRequest = useCreateEmailRequest();
  const isLoading = mutationEmailRequest.isPending;
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    content: "",
  };
  const [formData, setFormData] = useState(initialFormState);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutationEmailRequest.mutate(formData, {
      onSuccess: () => {
        setFormData(initialFormState);
      },
    });
  };
  return (
    <div className="bg-amber-300 h-fit rounded-bl-2xl rounded-tr-2xl border-4 border-black w-full md:w-fit px-3 py-3 md:px-10 md:py-6 shadow-[8px_8px_0px_#000] flex flex-col gap-8">
      <ToasterProvider />
      <h2 className="w-fit rounded-tl-xl rounded-br-xl border-2 border-black bg-amber-600 text-amber-200 py-1 px-2 text-base md:text-lg font-black shadow-[3px_3px_0px_#000]">
        Got something in the works? Share it with us and we’ll get back to you
        with next steps.
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full gap-8"
        action=""
      >
        <div className="flex flex-col w-full gap-5">
          <div className="flex flex-col md:flex-row w-full justify-between gap-5 md:gap-20">
            <input
              required
              value={formData.firstName}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }))
              }
              className="form-input"
              placeholder="First Name"
              type="text"
            />
            <input
              required
              value={formData.lastName}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  lastName: e.target.value,
                }))
              }
              className="form-input"
              placeholder="Last Name"
              type="text"
            />
          </div>
          <div className="flex w-full flex-col md:flex-row justify-between gap-5 md:gap-20">
            <input
              required
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              className="form-input"
              type="email"
              placeholder="Email"
            />
            <input
              required
              value={formData.subject}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  subject: e.target.value,
                }))
              }
              className="form-input"
              type="text"
              placeholder="Subject"
            />
          </div>
          <textarea
            required
            value={formData.content}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                content: e.target.value,
              }))
            }
            className="form-input h-50 md:h-30 scrollbar-none"
            placeholder="Tell us about your project"
          />
        </div>
        <div className="flex flex-col gap-5 md:gap-0 md:flex-row items-center justify-between">
          <motion.button
            whileHover={
              !isLoading
                ? {
                    scale: 1.07,
                    y: -6,
                    x: -4,
                    rotate: -2,
                    boxShadow: "10px 10px 0px #000",
                  }
                : {}
            }
            whileTap={
              isLoading
                ? {
                    scale: 0.94,
                    y: 3,
                    x: 3,
                    rotate: 0,
                    boxShadow: "2px 2px 0px #000",
                  }
                : {}
            }
            whileInView={{ boxShadow: "5px 5px 0px #000" }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 18,
            }}
            type="submit"
            disabled={isLoading}
            className="bg-amber-700 text-amber-200 px-10 py-3 w-full md:w-fit rounded-tr-xl rounded-bl-xl border-2 border-blacks focus:outline-none cursor-pointer"
          >
            <span className="drop-shadow-[3px_3px_0px_#000] leading-none">
              {isLoading ? "SEND.." : "SUBMIT"}
            </span>
          </motion.button>
          <div className="flex text-center md:text-start flex-col text-base">
            <span>{`If you'd prefer to email us instead,`}</span>
            <span>
              {" "}
              reach out to{" "}
              <AnimatedLink
                newTab={false}
                classname="text-blue-700"
                underline="bg-amber-800"
                href="mailto:nickowork13@gmail.com"
              >
                nickowork13@gmail.com
              </AnimatedLink>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
