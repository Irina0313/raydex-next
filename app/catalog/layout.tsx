"use client";

import { useState } from "react";
import { Layout, Space, theme } from "antd";
import BreadcrumbComponent from "../ui/breadcrumb";
import { catalog } from "../lib/catalog/catalog";
import CatalogNavigation from "../ui/catalogNavigation";
import styles from "./catalog.module.css";

const headerStyle: React.CSSProperties = {
  /* textAlign: "center", */
  color: "rgb(51, 51, 51)",
  height: 75,
  paddingInline: 0,
  fontWeight: "700",
  fontSize: "2.8em",
  lineHeight: "64px",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};

const siderStyle: React.CSSProperties = {
  //textAlign: "center",
  width: "450px",
  lineHeight: "120px",
  backgroundColor: "#fff",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

const { Header, Footer, Sider, Content } = Layout;

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
  catalogNavigation: React.ReactNode;
}) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [selectedCategory, setSelectedCategory] = useState("");

  const setCategory = (category: string | null) => {
    category && setSelectedCategory(category);
  };

  return (
    <div className={styles.layoutContainer}>
      <BreadcrumbComponent setCategory={setCategory} />
      <h1 style={headerStyle}>{selectedCategory}</h1>
      <Layout hasSider>
        <Sider style={siderStyle} width={350}>
          <CatalogNavigation />
        </Sider>
        <Layout>
          <Content style={{ margin: "24px 16px", overflow: "initial" }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
