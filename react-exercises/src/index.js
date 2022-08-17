import React from "react";
import { Root } from './Root';
import { createRoot } from "react-dom/client";

const root = createRoot (document.querySelector("#root"))

root.render(<Root />)