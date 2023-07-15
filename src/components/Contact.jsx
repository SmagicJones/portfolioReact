// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

export const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       contact_service,
  //       contact_form,
  //       form.current,
  //       "1bpu6juInhSll6lqp"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // };

  return (
    <section
      id="contact"
      className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-16 p-6"
    >
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Get in Touch
      </h2>

      <form
        netlify
        name="contact"
        data-netlify="true"
        onSubmit="submit"
        className="items-left mx-auto flex max-w-4xl flex-col gap-4 text-2xl sm:text-3xl"
      >
        <input id="name" type="text" required placeholder="your name" />
        <input id="email" type="email" required placeholder="your email" />
        <label htmlFor="subject"></label>
        <input
          name="subject"
          type="text"
          id="subject"
          required
          minLength="3"
          maxlength="60"
          placeholder="subject"
          className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"
        />
        <label htmlFor="message"></label>
        <textarea
          name="message"
          placeholder="Your message"
          id="message"
          cols="30"
          rows="10"
          required
          className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"
        ></textarea>
        <button
          value="Send"
          className="mx-auto w-48 rounded-xl border border-solid border-slate-900 bg-lime-500 p-3 text-white hover:bg-lime-400 active:bg-lime-500 dark:border-none"
        >
          Submit
        </button>
      </form>
    </section>
  );
};
