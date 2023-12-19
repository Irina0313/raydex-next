"use client";
import { useRouter } from "next/navigation";
import { Menu } from "antd";
import type { MenuProps } from "antd/es/menu";
import { CatalogItemType, catalog } from "../../lib/catalog/catalog";
import styles from "./catalog.module.css";
import { findPathByName } from "@/app/utils/getFullPath";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

export default function CatalogNavigation() {
  const route = useRouter();

  const handleMenuClick = (key: string) => {
    const path = findPathByName(key);
    route.push(`${path}`);
  };

  const createMenuItems = (
    items: CatalogItemType[],
    parentPath: string = "/catalog",
  ): MenuItem[] => {
    return items.map((item) => {
      const { id, path, name, subcategory } = item;

      const subcategoryItems: MenuItem[] | undefined =
        subcategory && subcategory.length > 0
          ? createMenuItems(subcategory, `${parentPath}/${path}`)
          : undefined;

      return getItem(
        <span
          style={{ display: "inline-block", width: "100%", height: "100%" }}
        >
          {name}
        </span>,
        id.toString(),
        null,
        subcategoryItems && [...subcategoryItems],
      );
    });
  };

  const items: MenuItem[] = createMenuItems(catalog);

  return (
    <Menu
      onClick={(e) => handleMenuClick(e.key)}
      mode="inline"
      style={{ width: 350 }}
      items={items}
    />
  );
}
