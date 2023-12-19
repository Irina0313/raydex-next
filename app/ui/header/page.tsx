"use client";

import { Layout, Menu } from "antd";
import styles from "./header.module.css";
import { pages } from "@/app/utils/getPage";
const { Header, Content, Footer } = Layout;

import Logo from "../logo/page";

const HeaderComponent = () => {
  return (
    <Header className={styles.header}>
      <Logo />
      <Menu
        className={styles.menu}
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={[""]}
        items={pages.map((page) => {
          const key = page.key;
          return {
            key,
            label: <a href={`/${page.key}`}>{page.name}</a>,
          };
        })}
      />
    </Header>
  );
};

export default HeaderComponent;
