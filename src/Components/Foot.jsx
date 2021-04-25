import React from "react";
function Foot() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <p>copyright &copy; {year}</p>
    </footer>
  );
}
export default Foot;
