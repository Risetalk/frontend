"use client";

import Navigation from "../components/NavBar";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import "../theme/globals.css";
import { Inter } from "next/font/google";
import { store } from "../store/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <Navigation />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
