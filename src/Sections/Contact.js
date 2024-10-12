import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  return (
    <main id="contact" className="container mx-auto max-width p-12">
      <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
          Qualquer dúvida me envie uma mensagem:
      </h1>
      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-green-text font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${email}`}>{email}</a>
      </h3>
      <span className="text-center text-content text-xl font-light block">ou</span>
      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-green-text font-semibold md:font-bold pt-2 md:py-6">
        <a href={`tel:${phone}`}>{phone}</a>
      </h3>
    </main>
  );
}

export default Contact;
