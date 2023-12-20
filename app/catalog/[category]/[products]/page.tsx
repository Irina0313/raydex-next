"use client";
import React from "react";

import { catalog } from "@/app/lib/catalog/catalog";
import ProductCard from "@/app/ui/productCard";

const wrapperStyle: React.CSSProperties = {
  display: "flex",
  gap: "20px",
};

export default function ProductsPage({
  params,
}: {
  params: { category: string; products: string };
}) {
  const category = catalog.filter((p) => p.path === params.category)[0];
  const subcategory = category.subcategory?.filter(
    (s) => s.path === params.products,
  )[0];
  const products = subcategory?.products;

  return (
    <div style={wrapperStyle}>
      <ProductCard category={products} imagePathPrefix="../../" />
    </div>
  );
}
