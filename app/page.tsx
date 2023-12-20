"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import HeaderComponent from "./ui/header";
import BreadcrumbComponent from "./ui/breadcrumb";

export default function App() {
  const params = useParams();

  return (
    <>
      <h1>Main</h1>
    </>
  );
}
