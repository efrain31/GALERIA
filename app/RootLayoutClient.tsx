"use client";

import { ReactNode, useEffect } from "react";
import FloatingMenu from "@/components/FloatingMenu";

export default function RootLayoutClient({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    // Suppress hydration mismatch warnings
    const originalError = console.error;
    console.error = (...args) => {
      const message = args[0]?.toString?.() || "";
      if (message.includes("Hydration failed")) {
        return;
      }
      originalError(...args);
    };

    return () => {
      console.error = originalError;
    };
  }, []);

  return (
    <>
      {children}
      <FloatingMenu />
    </>
  );
}
