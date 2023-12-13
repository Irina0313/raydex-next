"use client";
import { useRouter } from "next/navigation";
import { Menu } from "antd";
import type { MenuProps } from "antd/es/menu";
import { CatalogItemType, catalog } from "../../lib/catalog/catalog";
import styles from "./catalog.module.css";

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

export default function CatalogNavigation({
  getCategory,
}: {
  getCategory: (category: string) => void;
}) {
  const route = useRouter();

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
          onClick={() => {
            const fullPath = `${parentPath}/${path}`;

            route.push(`${fullPath}`);
            getCategory(fullPath);
          }}
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

  return <Menu mode="inline" style={{ width: 350 }} items={items} />;
}
