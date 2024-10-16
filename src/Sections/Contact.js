import React from "react";
import { useState } from 'react';
import { contactDetails } from "../Details";
import { socialMediaUrl } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  const { whatsapp } = socialMediaUrl;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
<main id="contact" className="container mx-auto max-width p-6 sm:p-12">
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        Qualquer dúvida me envie uma mensagem:
      </h1>
      <div className="flex items-center justify-center pt-4 sm:pt-5 md:pt-10 md:pb-6">
        <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl text-green-text font-semibold md:font-bold">
          <a href={`mailto:${email}`}>{email}</a>
        </h3>
        <div className="ml-2 sm:ml-3 flex flex-col items-center relative">
          {copied && (
            <span className="absolute -top-5 sm:-top-6 text-green-500 text-xs sm:text-sm font-medium">
              Copiado!
            </span>
          )}
          <button 
            onClick={handleCopy} 
            className="p-1 sm:p-2 rounded-full transition hover:bg-gray-200/40"
            aria-label="Copiar e-mail"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-gray-400 w-5 h-5 sm:w-6 sm:h-6"
            >
              <path d="m6 19v2c0 .621.52 1 1 1h2v-1.5h-1.5v-1.5zm7.5 3h-3.5v-1.5h3.5zm4.5 0h-3.5v-1.5h3.5zm4-3h-1.5v1.5h-1.5v1.5h2c.478 0 1-.379 1-1zm-1.5-1v-3.363h1.5v3.363zm0-4.363v-3.637h1.5v3.637zm-13-3.637v3.637h-1.5v-3.637zm11.5-4v1.5h1.5v1.5h1.5v-2c0-.478-.379-1-1-1zm-10 0h-2c-.62 0-1 .519-1 1v2h1.5v-1.5h1.5zm4.5 1.5h-3.5v-1.5h3.5zm3-1.5v-2.5h-13v13h2.5v-1.863h1.5v3.363h-4.5c-.48 0-1-.379-1-1v-14c0-.481.38-1 1-1h14c.621 0 1 .522 1 1v4.5h-3.5v-1.5z" />
            </svg>
          </button>
        </div>
      </div>
      <span className="text-center text-content text-base sm:text-lg md:text-xl font-light block">ou</span>
      <div className="flex items-center justify-center pt-2 md:py-6">
        <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl text-green-text font-semibold md:font-bold">
          <p>{phone}</p>
        </h3>
        <a href={whatsapp} target="_blank" rel="noreferrer noopener" className="ml-3">
          <svg
            width="50"
            height="50"
            viewBox="0 0 34 34"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block text-xl sm:text-2xl md:text-4xl lg:text-6xl text-white hover:text-[#25D366] transition-colors duration-300"

          >
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.86.75 5.544 2.05 7.883L.167 30.564l6.822-1.795C9.69 29.933 12.764 31 16 31c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.1c-2.98 0-5.767-.89-8.12-2.42l-4.785 1.258 1.278-4.653C3.92 21.44 3 18.788 3 16 3 8.828 8.828 3 16 3s13 5.828 13 13-5.828 13-13 13zm7.755-9.356c-.413-.207-2.448-1.214-2.83-1.35-.382-.137-.662-.206-.944.207-.275.404-1.083 1.35-1.328 1.628-.25.28-.482.314-.895.104-.413-.207-1.74-.642-3.316-2.05-1.226-1.086-2.05-2.422-2.286-2.837-.24-.413-.026-.637.18-.844.185-.184.413-.482.62-.723.207-.241.275-.413.413-.688.138-.275.07-.516-.035-.723-.103-.206-.944-2.293-1.292-3.134-.338-.814-.68-.702-.944-.713l-.88-.013c-.309 0-.78.104-1.19.482-.412.379-1.57 1.535-1.57 3.735s1.606 4.327 1.83 4.635c.226.304 3.162 4.8 7.665 6.72.739.32 1.316.509 1.765.651.74.235 1.414.202 1.944.122.59-.087 1.826-.747 2.086-1.469.26-.72.26-1.334.184-1.469-.079-.13-.3-.208-.62-.345z"/>
          </svg>
        </a>
      </div>
    </main>
  );
}

export default Contact;
