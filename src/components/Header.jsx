import React from "react";
import { USA, Logo, CA } from "./Svgs";

function Header() {
  return (
    <>
      <header className="header relative bg-brand-background-secondary flex">
        <div className="container p-6 flex items-center justify-between w-full">
          <div className="max-w-svg">
            <USA />
          </div>
          <div className="w-full mx-16">
            <Logo />
          </div>
          <div className="max-w-svg">
            <CA />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
