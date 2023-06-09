"use client";
import { Bubble } from "@typebot.io/react";
import { Standard } from "@typebot.io/react";
import Navigation from "../components/NavBar";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import 'react-loading-skeleton/dist/skeleton.css'
import "../theme/globals.css";
import { Inter } from "next/font/google";
import { store } from "../store/store";
import ProvidersWrapper from './login/ProvidersWrapper'
import { usePathname } from "next/navigation";
import 'react-toastify/dist/ReactToastify.css';
import { Session } from 'next-auth'
import { SkeletonTheme } from "react-loading-skeleton";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, session }) {
  const path = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
        
            <ProvidersWrapper session={session}>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
              {!path.includes("login") &&
                !path.includes("/mycourses/") &&
                !path.includes("register") &&
                !path.includes("create") &&
                path !== "/prueba" && <Navigation />}
              {children}
              {!path.includes("login") && !path.includes("register") && !path.includes("create") && <Footer />}
              {!path.includes("login") && !path.includes("register") && !path.includes('create') && (
                <Bubble
                  typebot="lead-generation-copy-70b2cnx"
                  theme={{
                    button: { backgroundColor: "#DE8031" },
                  }}
                />
              )}
              </SkeletonTheme>
            </ProvidersWrapper>

        </Provider>

      </body>
    </html>
  );
}