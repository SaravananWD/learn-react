import React from "react";

function Logo({ children }) {
  return <div>{children}</div>;
}

function Tagline() {
  return <div>a react developer creating prototypes</div>;
}

function Header() {
  return (
    <header>
      <Logo>Saravanan Devaraj</Logo>
      <Tagline />
    </header>
  );
}

export default Header;
