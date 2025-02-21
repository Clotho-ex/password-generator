import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-2 pt-6">
      <p className="text-center text-slate-400">
        Checkout my GitHub Profile <br />  
        <a
          href="https://github.com/Clotho-ex"
          className="text-green-400 hover:text-green-300 transition-colors underline underline-offset-4"
          target="_blank"
          rel="noopener noreferrer">
          View Clotho on GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
