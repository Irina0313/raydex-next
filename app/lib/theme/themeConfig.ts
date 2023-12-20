import type { ThemeConfig } from "antd";
const colorPrimary = "#2e69ad";

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimaryBg: "#dfe8ed",
    colorLink: "#2e69ad",
    colorLinkHover: "#75a1c7",
    colorLinkActive: "#1e4b87",
    colorPrimaryBgHover: "#ccd8e0",
    colorPrimaryBorder: "#9fbdd4",
    colorPrimaryBorderHover: "#75a1c7",
    colorPrimaryHover: "#5085ba",
    colorPrimaryActive: "#1e4b87",
    colorPrimaryTextHover: "#5085ba",
    colorPrimaryText: "#2e69ad",
    colorPrimaryTextActive: "#1e4b87",
    colorPrimary: colorPrimary,
    colorInfo: colorPrimary,
    colorTextBase: "#000",
    colorBgBase: "#fff",
    colorText: "rgba(0, 0, 0, 0.88)",
    colorTextSecondary: "rgba(0, 0, 0, 0.65)",
    colorTextTertiary: "rgba(0, 0, 0, 0.45)",
    colorTextQuaternary: "rgba(0, 0, 0, 0.25)",
  },
  components: {
    Layout: {
      headerBg: "#fff",
      headerHeight: 100,
    },

    Menu: {
      colorBorder: "transparent",
      itemPaddingInline: 18,
      colorFillAlter: "#fff",
      itemHeight: 50,
    },
    Carousel: {
      dotHeight: 10,
      dotActiveWidth: 10,
      dotWidth: 10,
    },
    Button: {
      colorPrimary: "#2e69ad",
      defaultColor: colorPrimary,
    },
  },
};

export default theme;
