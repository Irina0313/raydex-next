import { FilePdfOutlined } from "@ant-design/icons";
import Link from "next/link";

const handleDownload = async (path: string) => {
  const fileName = path.split("/").slice(-1).join("");
  const pdfPath = path;

  const response = await fetch(pdfPath);
  const blob = await response.blob();

  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = fileName;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

interface certificate {
  type: string;
  path: string;
  title: string;
}

interface getDocsProps {
  promotionalMaterials: string[];
  certificates: certificate[];
}

const getDocs = (params: getDocsProps) => {
  const { promotionalMaterials, certificates } = params;

  return (
    <>
      {promotionalMaterials.length > 0 && (
        <>
          <h2>Рекламные материалы:</h2>
          {promotionalMaterials.map((p) => (
            <div key={p}>
              <FilePdfOutlined
                style={{ fontSize: "30px", color: "#2e69ad", margin: "10px" }}
                onClick={() => handleDownload(p)}
              />
              <span>Рекламная листовка</span>
            </div>
          ))}
        </>
      )}
      {certificates.length > 0 && (
        <>
          <h2>Сертификаты:</h2>
          {certificates.map((p) => (
            <div key={p.title}>
              {p.type === "doc" && (
                <>
                  <FilePdfOutlined
                    style={{
                      fontSize: "30px",
                      color: "#2e69ad",
                      margin: "10px",
                    }}
                    onClick={() => handleDownload(p.path)}
                  />
                  <span>{p.title}</span>
                </>
              )}
              {p.type === "link" && (
                <Link
                  style={{ margin: "10px", lineHeight: "2.1rem" }}
                  href={p.path}
                >
                  {p.title}
                </Link>
              )}
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default getDocs;
