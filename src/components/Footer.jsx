import React from "react";

const Footer = () => {
  return (
    <footer className="block bg-transparent w-full p-4 backdrop-blur-sm">
      <p className="text-center text-slate-400">
        Checkout my GitHub Profile {"-> "}
        <a
          href="https://github.com/Clotho-ex"
          className="text-green-400 hover:text-green-300 transition-colors underline underline-offset-4"
          target="_blank"
          rel="noopener noreferrer">
          Click Here
        </a>
      </p>
    </footer>
  );
};

export default Footer;
