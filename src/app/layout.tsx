'use client'
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import StyledComponentsRegistry from "../../lib/registry";
import GlobalStyles from "@/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import "swiper/css";

const pld = Playfair_Display({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pld.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
