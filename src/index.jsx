import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";

import global_en from "../src/translation/en/global.json";
import global_fr from "../src/translation/fr/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: true },
  lng: "fr",
  resources: {
    en: { global: global_en },
    fr: { global: global_fr },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Header />
      <App />
      <Footer />
    </I18nextProvider>
  </React.StrictMode>,
);
