import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Redirect published Lovable site to the real domain
if (window.location.hostname.includes("lovable.app")) {
  window.location.replace("https://www.juvenasbakery.com/");
} else {
  createRoot(document.getElementById("root")!).render(<App />);
}
