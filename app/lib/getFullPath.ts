import { catalog, CatalogItemType } from "./catalog/catalog";

export function findPathByName(
  name: string,
  catalogItems: CatalogItemType[] = catalog,
  pathPrefix: string = "/catalog",
): string | null {
  for (const item of catalogItems) {
    if (item.name === name || item.id === name) {
      return `${pathPrefix}/${item.path}`;
    }

    if (item.subcategory) {
      const subcategoryPath = findPathByName(
        name,
        item.subcategory,
        `${pathPrefix}/${item.path}`,
      );
      if (subcategoryPath) {
        return subcategoryPath;
      }
    }

    if (item.products) {
      for (const product of item.products) {
        if (product.name === name) {
          return `${pathPrefix}/${item.path}/${product.path}`;
        }
      }
    }
  }

  return null;
}
