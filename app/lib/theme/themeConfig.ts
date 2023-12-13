import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: "#2e69ad",
    colorInfo: "#2e69ad",
    colorPrimaryText: "rgb(51, 51, 51)",
  },
  components: {
    Layout: {
      headerBg: "#fff",
    },
    Button: {
      colorLink: "rgb(46, 105, 173)",
      groupBorderColor: "rgb(46, 105, 173)",
      colorPrimary: "rgb(255, 255, 255)",
      colorPrimaryHover: "rgb(46, 105, 173)",
      colorPrimaryBorder: "rgb(46, 105, 173)",
    },
    Menu: {
      colorBorder: "transparent",
      itemPaddingInline: 18,
      colorFillAlter: "#fff",
      itemHeight: 50,
    },
  },
};

export default theme;
