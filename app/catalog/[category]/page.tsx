"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Flex } from "antd";
import { catalog } from "@/app/lib/catalog/catalog";
import ProductCard from "@/app/ui/productCard";

export default function SubcategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = catalog.filter((p) => p.path === params.category)[0];
  const subcategory =
    category.subcategory && category.subcategory?.flatMap((p) => p.products);

  return (
    <Flex wrap="wrap" gap={50} justify="center">
      <ProductCard category={subcategory} imagePathPrefix="../" />
    </Flex>
  );
}
