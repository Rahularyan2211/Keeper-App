import React from "react";

function Footer() {
  const curentYear = new Date().getFullYear();


  return <footer>
    <p>
      Copyright © {curentYear}
    </p>
  </footer>
};

export default Footer;