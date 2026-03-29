import { useState } from "react";

const fileSystem = {
  name: "C:\\",
  type: "folder",
  children: [
    {
      name: "Mi Portfolio",
      type: "folder",
      children: [
        {
          name: "about_me.txt",
          type: "file",
          content:
            "=== ABOUT ME ===\n\nHola! Soy [tu nombre].\n\nTrabajo en la intersección de datos, tecnología y cultura.\n\nEste proyecto explora cómo la nostalgia del internet\nde los 90s esconde tanto promesas como exclusiones.",
        },
        {
          name: "projects.txt",
          type: "file",
          content:
            "=== PROJECTS ===\n\n1. Netstalgia Desktop\n   Una simulación de Windows 98 que cuestiona\n   la nostalgia por el internet temprano.\n\n2. [Agrega tus otros proyectos aquí]",
        },
      ],
    },
    {
      name: "Statement",
      type: "folder",
      children: [
        {
          name: "artist_statement.txt",
          type: "file",
          content:
            '=== ARTIST STATEMENT ===\n\n"Navegábamos libres" es el mito.\n\nPero, ¿quiénes navegaban?\n¿En qué idioma?\n¿Desde dónde?\n\nEste escritorio simula la experiencia de usar\nuna computadora en 1998 — pero también pregunta:\n¿para quién era esa experiencia?\n\nEn 1998, solo el 3.6% de la población mundial\ntenía acceso a internet. El 80% del contenido\nestaba en inglés.\n\nLa nostalgia es selectiva.\nEste proyecto intenta recordar lo que\nla nostalgia olvida.',
        },
      ],
    },
    {
      name: "readme.txt",
      type: "file",
      content:
        "=== NETSTALGIA 98 ===\n\nBienvenidx a este escritorio.\n\nExplora las carpetas, abre el navegador,\nchatea en el messenger.\n\nCada ventana cuenta una parte de la historia\nde quiénes estaban (y quiénes no) en el\ninternet de los 90s.",
    },
  ],
};

export default function FileExplorer({ onOpenFile }) {
  const [currentPath, setCurrentPath] = useState([fileSystem]);
  const currentFolder = currentPath[currentPath.length - 1];

  function navigate(item) {
    if (item.type === "folder") {
      setCurrentPath([...currentPath, item]);
    } else if (item.type === "file" && onOpenFile) {
      onOpenFile(item.name, item.content);
    }
  }

  function goUp() {
    if (currentPath.length > 1) {
      setCurrentPath(currentPath.slice(0, -1));
    }
  }

  const pathString = currentPath.map((p) => p.name).join("\\");

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Toolbar */}
      <div style={{ padding: "4px 8px", borderBottom: "1px solid #808080", display: "flex", gap: 8, alignItems: "center" }}>
        <button
          onClick={goUp}
          disabled={currentPath.length <= 1}
          style={{ fontSize: 11, padding: "2px 8px" }}
        >
          ⬆ Up
        </button>
        <div
          style={{
            flex: 1,
            background: "white",
            border: "1px inset",
            padding: "2px 4px",
            fontSize: 11,
          }}
        >
          {pathString}
        </div>
      </div>

      {/* File list */}
      <div style={{ flex: 1, overflow: "auto", padding: 8 }}>
        {currentFolder.children?.map((item) => (
          <div
            key={item.name}
            onDoubleClick={() => navigate(item)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "4px 8px",
              cursor: "pointer",
              fontSize: 12,
            }}
          >
            <span style={{ fontSize: 16 }}>
              {item.type === "folder" ? "📁" : "📄"}
            </span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
