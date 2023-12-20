"use client";
/* eslint-disable @next/next/no-img-element */
import { Card, Flex } from "antd";

import Link from "next/link";
import { CatalogItemType, catalog } from "../lib/catalog/catalog";
import { findPathByName } from "../utils/getFullPath";
import Grid from "antd/es/card/Grid";

const { Meta } = Card;

const productsAmount = (subcategory: CatalogItemType[] | undefined) => {
  const categories = subcategory
    ? subcategory.flatMap((s) => s.products).length
    : 0;

  let items = "товар";

  const ends = {
    ов: ["0", "5", "6", "7", "8", "9"],
    а: ["2", "3", "4"],
  };

  if (ends.ов.includes(categories.toString().slice(-1))) {
    items += "ов";
  }
  if (ends.а.includes(categories.toString().slice(-1))) {
    items += "а";
  }
  return `${categories} ${items}`;
};

export default function Catalog() {
  return (
    <Flex wrap="wrap" gap={50} justify="center">
      {catalog.map((p) => (
        <Link key={p.id} href={`${findPathByName(p.name)}`}>
          <Card
            hoverable
            style={{ width: 400 }}
            cover={
              <img
                alt="Фото товара"
                src={`${p.subcategory?.[0]?.products?.[0]?.images?.[0]}`}
              />
            }
          >
            <Meta
              title={p.name}
              description={`${productsAmount(p.subcategory)}`}
            />
          </Card>
        </Link>
      ))}
    </Flex>
  );
}
/* <a href={`/catalog/${p.path}`}>{p.name}</a> */
