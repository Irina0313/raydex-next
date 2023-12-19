import { Metadata } from "next";
import { Roboto } from "next/font/google";
import StyledComponentsRegistry from "./lib/AntdRegistry";
import theme from "./lib/theme/themeConfig";
import HeaderComponent from "./ui/header/page";
import "./globals.css";
import { ConfigProvider } from "antd";

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "ООО Рэйдекс",
  generator: "Next.js",
  applicationName: "raydex",
  referrer: "origin-when-cross-origin",
  keywords: ["Raydex", "Рэйдекс", 'ООО "Рэйдекс"'],
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <ConfigProvider theme={theme}>
          <StyledComponentsRegistry>
            <HeaderComponent />

            {children}
          </StyledComponentsRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
