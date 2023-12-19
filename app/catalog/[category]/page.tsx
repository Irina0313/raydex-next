"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button, Card, Carousel, Flex, Image } from "antd";
import { catalog } from "@/app/lib/catalog/catalog";
import ImagesCarousel from "@/app/ui/imagesCarusel";
import Link from "next/link";
import theme from "@/app/lib/theme/themeConfig";
import { findPathByName } from "@/app/lib/getFullPath";
import ProductCard from "@/app/ui/productCard";

const { Meta } = Card;

const divStyle: React.CSSProperties = {
  border: "1px solid black",
  width: "25%",
  textAlign: "center",
  lineHeight: 1,
};

const wrapperStyle: React.CSSProperties = {
  display: "flex",
  gap: "20px",
};

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
