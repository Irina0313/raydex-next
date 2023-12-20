"use client";

import React, { ReactNode } from "react";
import { useParams } from "next/navigation";
import { Layout } from "antd";
import CatalogNavigation from "../ui/catalogNavigation";
import PageTitle from "../ui/pageTitle";
import styles from "./catalog.module.css";

/* const headerStyle: React.CSSProperties = {
  color: "rgb(51, 51, 51)",
  height: 75,
  paddingInline: 0,
  fontWeight: "700",
  fontSize: "2.8em",
  lineHeight: "64px",
}; */

const siderStyle: React.CSSProperties = {
  width: "450px",
  lineHeight: "120px",
  backgroundColor: "#fff",
};

const { Sider, Content } = Layout;

interface CatalogLayoutProps {
  children: ReactNode;
}

export default function CatalogLayout({ children }: CatalogLayoutProps) {
  const params = useParams();

  return (
    <div className={styles.layoutContainer}>
      <PageTitle />
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
