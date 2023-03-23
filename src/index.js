import React from "react";
import ReactDOM from "react-dom";
import Input from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import App from "./App";
import GetTranslation from "./GetTranslation";
import Header from "./Header";

// document.getElementById("root").render(
//   return(
//     <div>
//       <App />
//     </div>
//   )

// );

ReactDOM.render(
  <div>
    <Header />
    <App />
    <GetTranslation />
  </div>,
  document.getElementById("root")
);
