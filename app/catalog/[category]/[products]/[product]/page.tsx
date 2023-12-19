"use client";

import { useParams } from "next/navigation";
import { getPage } from "@/app/utils/getPage";

export default function ProductPage() {
  const params = useParams();
  const product = getPage(params.product.toString());
  console.log(product);
  /* const category = catalog.filter((p) => p.path === params.category)[0];
  const subcategory = category.subcategory?.filter(
    (s) => s.path === params.products,
  )[0];
  const products = subcategory?.products; */

  return <div>1</div>;
}
