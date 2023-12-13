import React from "react";
import { Card } from "antd";
import { catalog } from "@/app/lib/catalog/catalog";

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

export default function ProductsPage({
  params,
}: {
  params: { category: string; products: string };
}) {
  const category = catalog.filter((p) => p.path === params.category)[0];
  const subcategory = category.subcategory?.filter(
    (s) => s.path === params.products,
  );
  const products = subcategory && subcategory[0]?.products;

  return (
    <div style={wrapperStyle}>
      {products &&
        products.map((p) => (
          <div key={p?.id} style={divStyle}>
            {p && (
              <>
                <p>{p.name}</p>
                <p>{p.status}</p>
                <p>{p.shortDescription}</p>
                <p>{subcategory[0]?.name}</p>
              </>
            )}
          </div>
        ))}
    </div>
  );
}
