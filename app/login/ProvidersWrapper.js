import React from "react";
import { SessionProvider } from "next-auth/react";

export default function ProvidersWrapper({ session, children }) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      {children}
    </SessionProvider>
  );
}
