import { useEffect, useState, useRef } from "react";
import { ExternalSelection, Selection } from "seqviz/dist/selectionContext";
import seqparse, { Seq } from "seqparse";

// Maybe not the best way to do it, but helps refactor for v0.0.5~alpha

export const [seq, setSeq] = useState<Seq>({
  name: "",
  type: "unknown",
  seq: "",
  annotations: [],
});


// The bed file text content
export const [text, setText] = useState<string>("");

// Handle selections
export const [sel, setSel] = useState<ExternalSelection>();
export const selections: Selection[] = [];

// Handle dragging
export const [dragOver, setDragOver] = useState<boolean>(false);

// Reference to the bed file area
export const textareaRef = useRef<HTMLTextAreaElement>(null);

