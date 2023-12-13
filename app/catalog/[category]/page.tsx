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

export default function SubcategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = catalog.filter((p) => p.path === params.category)[0];
  const subcategory =
    category.subcategory && category.subcategory?.flatMap((p) => p.products);

  return (
    <div style={wrapperStyle}>
      {category.subcategory &&
        subcategory?.map((p) => (
          <div key={p?.id} style={divStyle}>
            {p && (
              <>
                <p>{p.name}</p>
                <p>{p.status}</p>
                <p>{p.shortDescription}</p>
                <p>
                  {
                    category.subcategory?.find((s) => s.products?.includes(p))
                      ?.name
                  }
                </p>
              </>
            )}
          </div>
        ))}
    </div>
  );
}
