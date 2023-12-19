import { catalog } from "../lib/catalog/catalog";
import { CatalogItemType } from "../lib/catalog/catalog";
import { ProductItemType } from "../lib/catalog/products/01_XRayAndGammaRadiationDosimeters/ElectronicDosimeters";

export const pages = [
  { key: "catalog", name: "Каталог" },
  { key: "company", name: "О нас" },
  { key: "contacts", name: "Контакты" },
];

export function getPage(path: string):
  | {
      key: string;
      name: string;
    }
  | CatalogItemType
  | ProductItemType
  | null {
  const page =
    pages.find((p) => p.key === path) ||
    catalog.find((p) => p.path === path) ||
    catalog.flatMap((p) => p.subcategory).find((s) => s?.path === path) ||
    catalog
      .flatMap((p) => p.subcategory)
      .flatMap((prod) => prod?.products)
      .find((prodPath) => prodPath?.path === path);
  return page || null;
}
