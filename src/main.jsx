import "@scss/styles.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App.jsx";
import muiTheme from "./muiTheme";

// PostHog Analytics
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
posthog.init(import.meta.env.VITE_POSTHOG_API_KEY, {
  api_host: import.meta.env.VITE_POSTHOG_API_URL,
  person_profiles: "identified_only",
  capture_pageview: false,
  autocapture: {},
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
      <PostHogProvider client={posthog}>
        <App />
      </PostHogProvider>
    </ThemeProvider>
  </React.StrictMode>
);
