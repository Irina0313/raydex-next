"use client";

import { Layout, Menu, Flex } from "antd";
import styles from "./header.module.css";
import { pages } from "@/app/utils/getPage";
const { Header, Content, Footer } = Layout;

import Logo from "../logo";

const HeaderComponent = () => {
  return (
    <Header className={styles.header}>
      <Flex vertical justify="center" align="center">
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
              label:
                page.key === "catalog" ? (
                  <a href={`/${page.key}/x-ray-and-gamma-radiation-dosimeters`}>
                    {page.name}
                  </a>
                ) : (
                  <a href={`/${page.key}`}>{page.name}</a>
                ),
            };
          })}
        />
      </Flex>
    </Header>
  );
};

export default HeaderComponent;
