import { catalog } from "../lib/catalog/catalog";

export default function Catalog() {
  return (
    <>
      {catalog.map((p) => (
        <div key={p.id}>
          <a href={`/catalog/${p.path}`}>{p.name}</a>
        </div>
      ))}
    </>
  );
}
