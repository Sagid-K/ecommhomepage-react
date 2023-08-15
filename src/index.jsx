import React from "react";
import ReactDOMClient from "react-dom/client";
import { ECommerceHomepage } from "./screens/ECommerceHomepage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ECommerceHomepage />);
