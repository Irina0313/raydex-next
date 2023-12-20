"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import HeaderComponent from "./ui/header";
import BreadcrumbComponent from "./ui/breadcrumb";
import styles from "./styles.module.css";

export default function App() {
  const params = useParams();

  return (
    <main className={styles.main}>
      <h1>Main</h1>
    </main>
  );
}
