"use client";

import { ReactNode } from "react";

interface HydrationWrapperProps {
  children: ReactNode;
}

export default function HydrationWrapper({ children }: HydrationWrapperProps) {
  return (
    <div suppressHydrationWarning style={{ width: "100%" }}>
      {children}
    </div>
  );
}
