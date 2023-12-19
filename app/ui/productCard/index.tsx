"use client";

import Link from "next/link";
import { Card, Button } from "antd";
import ImagesCarousel from "../imagesCarusel";
import { findPathByName } from "@/app/utils/getFullPath";
import { ProductItemType } from "@/app/lib/catalog/products/01_XRayAndGammaRadiationDosimeters/ElectronicDosimeters";
import { CatalogItemType } from "@/app/lib/catalog/catalog";

const { Meta } = Card;

interface ProductCardProps {
  category?: (ProductItemType | undefined)[] | undefined;
  imagePathPrefix?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  category = [],
  imagePathPrefix = "",
}) => {
  return (
    <>
      {category.map(
        (p) =>
          p && (
            <Card
              key={p?.id}
              hoverable
              style={{
                width: 400,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              cover={
                <ImagesCarousel
                  images={p.images}
                  imagePathPrefix={imagePathPrefix}
                />
              }
            >
              <Meta
                title={
                  <Link
                    style={{ overflow: "visible" }}
                    href={`${findPathByName(p.name)}`}
                  >
                    {p.name}
                  </Link>
                }
                description={`${p.status}`}
              />
              <Button type="primary">Заказать</Button>
            </Card>
          ),
      )}
    </>
  );
};

export default ProductCard;
