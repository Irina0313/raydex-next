"use client";

import React from "react";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { usePathname } from "next/navigation";
import { catalog } from "@/app/lib/catalog/catalog";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import style from "./style.module.css";

export const pages = [
  { key: "catalog", name: "Каталог" },
  { key: "company", name: "О нас" },
  { key: "contacts", name: "Контакты" },
];

const BreadcrumbComponent: React.FC = () => {
  const params = usePathname()
    .split("/")
    .filter((item) => !!item);

  const results = params.map((param, index) => {
    if (params[0] === "product") {
      let path = null;

      const title = "product";

      if (param === "product") {
        path = "/product";
      }

      if (param !== "product") {
        path = catalog.find(
          (c) =>
            c.subcategory?.find(
              (p) => p.products?.find((prod) => prod.name === param),
            ),
        );
      }
      return { title, path };
    }

    if (param[0] !== "product") {
      const path = params.slice(0, index + 1).join("/");
      const page =
        pages.find((p) => p.key === param) ||
        catalog.find((p) => p.path === param) ||
        catalog.flatMap((p) => p.subcategory).find((s) => s?.path === param);

      return { title: page?.name, path: `/${path}` };
    }
  });

  const breadcrumbItems: ItemType[] = [
    {
      href: "/",
      title: <HomeOutlined />,
    },
    ...results
      .filter((result) => result)
      .map((result) => ({
        title: result?.title || "",
        href: result?.path ? String(result?.path) : "",
      })),
  ];

  return (
    <div className={style.breadcrumbContainer}>
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
};

export default BreadcrumbComponent;
