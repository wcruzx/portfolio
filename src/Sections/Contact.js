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
    <main id="contact" className="container mx-auto max-width p-12">
      <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
          Qualquer dúvida me envie uma mensagem:
      </h1>
      <div className="flex items-center justify-center pt-5 md:pt-10 md:pb-6">
        <h3 className="text-3xl md:text-4xl lg:text-6xl text-green-text font-semibold md:font-bold">
          <a href={`mailto:${email}`}>{email}</a>
        </h3>
        <div className="ml-3 flex flex-col items-center relative">
          <button 
              onClick={handleCopy}
              className="ml-3 p-2 rounded-full transition hover:bg-gray-200/40"
              aria-label="Copiar e-mail"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="40" 
                height="40" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-gray-200"
              >
                <path d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" />
            </svg>
          </button>
         {copied && (
          <span className="absolute -top-6 text-green-500 text-sm font-medium">
            Copiado!
          </span>
        )}                             
        </div>
      </div>
      <span className="text-center text-content text-xl font-light block">ou</span>
      <div className="flex items-center justify-center pt-2 md:py-6">
        <h3 className="text-3xl md:text-4xl lg:text-6xl text-green-text font-semibold md:font-bold">
          <p>{phone}</p>
        </h3>
        <a href={whatsapp} target="_blank" rel="noreferrer noopener" className="ml-3">
          <svg
            width="50"
            height="40"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="#25D366" d="M16 0C7.163 0 0 7.163 0 16c0 2.86.75 5.544 2.05 7.883L.167 30.564l6.822-1.795C9.69 29.933 12.764 31 16 31c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.1c-2.98 0-5.767-.89-8.12-2.42l-4.785 1.258 1.278-4.653C3.92 21.44 3 18.788 3 16 3 8.828 8.828 3 16 3s13 5.828 13 13-5.828 13-13 13zm7.755-9.356c-.413-.207-2.448-1.214-2.83-1.35-.382-.137-.662-.206-.944.207-.275.404-1.083 1.35-1.328 1.628-.25.28-.482.314-.895.104-.413-.207-1.74-.642-3.316-2.05-1.226-1.086-2.05-2.422-2.286-2.837-.24-.413-.026-.637.18-.844.185-.184.413-.482.62-.723.207-.241.275-.413.413-.688.138-.275.07-.516-.035-.723-.103-.206-.944-2.293-1.292-3.134-.338-.814-.68-.702-.944-.713l-.88-.013c-.309 0-.78.104-1.19.482-.412.379-1.57 1.535-1.57 3.735s1.606 4.327 1.83 4.635c.226.304 3.162 4.8 7.665 6.72.739.32 1.316.509 1.765.651.74.235 1.414.202 1.944.122.59-.087 1.826-.747 2.086-1.469.26-.72.26-1.334.184-1.469-.079-.13-.3-.208-.62-.345z"/>
          </svg>
        </a>
      </div>

    </main>
  );
}

export default Contact;
