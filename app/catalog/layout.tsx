"use client";

import { useParams } from "next/navigation";
import { Layout, theme } from "antd";
import BreadcrumbComponent from "../ui/breadcrumb";
import CatalogNavigation from "../ui/catalogNavigation";
import { getPage } from "../utils/getPage";
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

  const params = useParams();
  const title = getPage(Object.values(params).slice(-1).toString())?.name;

  return (
    <div className={styles.layoutContainer}>
      <BreadcrumbComponent />
      <h1 style={headerStyle}>{title}</h1>
      {params.product ? (
        <div>{children}</div>
      ) : (
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
      )}
    </div>
  );
}
