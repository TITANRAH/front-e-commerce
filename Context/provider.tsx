"use client";

import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Toaster position='top-center' reverseOrder={false}/>
      {children}{" "}
    </ThemeProvider>
  );
}
