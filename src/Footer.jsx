import React from "react";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer>
      <p>Copyrights {date}</p>
    </footer>
  );
}
export default Footer;
