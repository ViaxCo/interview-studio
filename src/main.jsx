import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

const convexUrl = import.meta.env.VITE_CONVEX_URL;
const root = createRoot(document.getElementById("root"));

function canUseLocalStorage() {
  try {
    const key = "interview-studio-storage-check";
    window.localStorage.setItem(key, "1");
    window.localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
}

async function renderApp() {
  if (convexUrl && canUseLocalStorage()) {
    const [{ ConvexAuthProvider }, { ConvexReactClient }, { default: ConvexApp }] = await Promise.all([
      import("@convex-dev/auth/react"),
      import("convex/react"),
      import("./ConvexApp.jsx")
    ]);
    const convex = new ConvexReactClient(convexUrl);

    root.render(
      <React.StrictMode>
        <ConvexAuthProvider client={convex}>
          <ConvexApp />
        </ConvexAuthProvider>
      </React.StrictMode>
    );
    return;
  }

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

void renderApp();
