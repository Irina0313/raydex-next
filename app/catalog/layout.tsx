"use client";

import { useState } from "react";
import { Layout, Space, theme } from "antd";
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
  const [selectedCategory, setSelectedCategory] = useState(catalog[0].name);

  const getCategory = (path: string) => {
    const pathItems = path.split("/");
    const selectedCategoryPath = pathItems[2];
    const selectedSubcategoryPath =
      (pathItems.length > 3 && pathItems[pathItems.length - 1]) || null;

    const selectedCategory = catalog.filter(
      (p) => p.path === selectedCategoryPath,
    )[0];
    const selectedSubcategoryName = selectedCategory.subcategory?.filter(
      (sub) => sub?.path === selectedSubcategoryPath,
    )[0]?.name;

    setSelectedCategory(selectedSubcategoryName || selectedCategory.name);
  };

  return (
    <div className={styles.layoutContainer}>
      <h1 style={headerStyle}>{selectedCategory}</h1>
      <Layout hasSider>
        <Sider style={siderStyle} width={350}>
          <CatalogNavigation getCategory={getCategory} />
        </Sider>
        <Layout>
          <Content style={{ margin: "24px 16px", overflow: "initial" }}>
            <div
              style={{
                padding: 24,
                textAlign: "center",
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
