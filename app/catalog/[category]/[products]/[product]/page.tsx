"use client";

import { useState } from "react";
import { useParams, usePathname } from "next/navigation";
import { getPage } from "@/app/utils/getPage";
import ImagesSlider from "@/app/ui/ImagesSlider";
import { Tabs } from "antd";

import styles from "./styles.module.css";
import Link from "next/link";

export default function ProductPage() {
  const params = useParams();
  const path = usePathname();

  const product = getPage(params.product.toString());
  const images = product && "images" in product && product?.images;
  const tabs = product && "tabs" in product && product?.tabs;

  const [activeTab, setActiveTab] = useState("Описание");

  const getTabContent = (key: string) => {
    return (
      product &&
      (key === "Описание" && "fullDescription" in product
        ? product.fullDescription
        : key === "Характеристики" && "fullCharacteristics" in product
          ? product.fullCharacteristics
          : key === "Документы" && "docs" in product
            ? product.docs
            : null)
    );
  };

  const onChange = (key: string) => {
    setActiveTab(key);
  };

  const handleDetailsLinkClick = (tab: string) => {
    setActiveTab(tab);
  };

  const prevPagePath = (): string => {
    return path.split("/").slice(0, -1).join("/");
  };

  return (
    <>
      <div className={styles.topSection}>
        <div className={styles.sliderContainer}>
          {images && (
            <ImagesSlider images={images} imagePathPrefix="../../../" />
          )}
        </div>
        <div className={styles.shortDescription}>
          {product && "shortDescription" in product && product.shortDescription}
          <Link
            className={styles.detailsLink}
            href="#description"
            onClick={() => handleDetailsLinkClick("Описание")}
          >
            Подробности
          </Link>
          <h3>Характеристики</h3>
          {product && "characteristics" in product && product.characteristics}
          <Link
            className={styles.detailsLink}
            href="#characteristics"
            onClick={() => handleDetailsLinkClick("Характеристики")}
          >
            Все характеристики
          </Link>
        </div>
      </div>
      <div className={styles.bottomSection}>
        {tabs && (
          <Tabs
            onChange={onChange}
            type="card"
            items={Object.values(tabs).map((key, index) => {
              return {
                id: `${Object.keys(tabs)[index]}`,
                label: `${key}`,
                key: key,
                children: getTabContent(key),
              };
            })}
            activeKey={activeTab}
          />
        )}
      </div>

      <Link className={styles.detailsLink} href={prevPagePath()}>
        Назад к списку
      </Link>
    </>
  );
}
