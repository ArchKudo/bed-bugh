// Component to activate when drag and drop action is happening
// Use default class in bootstrap / mantine



// TODO: Replace below with something saner
// Handle drag and drop actions

import { useState } from "react";
import seqparse, { Seq } from "seqparse";

export const [dragOver, setDragOver] = useState<boolean>(false);

export const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
  event.preventDefault();
  setDragOver(true);
};

export const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
  event.preventDefault();
  setDragOver(false);
};

export const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
  event.preventDefault();
  setDragOver(false);

  const file = event.dataTransfer.files[0];
  const fileType = file.name.split(".").pop();

  if (fileType === "fasta") {
    const reader = new FileReader();
    reader.onload = async () => {
      const content = reader.result as string;
      const { name, type, seq, annotations } = await seqparse(content, {
        fileName: file.name,
      });
      setSeq({ name, type, seq, annotations });
    };
    reader.readAsText(file);
  } else if (fileType === "bed") {
    const reader = new FileReader();
    reader.onload = () => {
      setText(reader.result as string);
    };
    reader.readAsText(file);
  } else {
    alert("Unsupported file type");
  }
};


<div
className={`column is-four-fifths ${dragOver ? "is-dragover" : ""}`}
onDragOver={handleDragOver}
onDragLeave={handleDragLeave}
onDrop={handleDrop}
style={{ position: "relative" }}
>
{dragOver && (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(128,128,128,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 10,
    }}
  >
    <p>Drop .bed for textarea</p>
  </div>
)}

</div>

