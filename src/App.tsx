import "bulma/css/bulma.min.css";
import { useEffect, useState, useRef } from "react";
import seqparse, { Seq } from "seqparse";
import { ExternalSelection, Selection } from "seqviz/dist/selectionContext";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Bed from "./components/Bed";
import Buttons from "./components/Buttons";
import Fasta from "./components/Fasta";

function App() {
  const [seq, setSeq] = useState<Seq>({
    name: "",
    type: "unknown",
    seq: "",
    annotations: [],
  });

  const [text, setText] = useState<string>("");
  const [dragOver, setDragOver] = useState<boolean>(false);
  const [sel, setSel] = useState<ExternalSelection>();
  const [selections, setSelections] = useState<Selection[]>([]);

  const appendText = (newText: string) => {
    setText((prevText) => prevText + "\n" + newText);
  };

  useEffect(() => {
    const fetchFASTA = async () => {
      const result = await seqparse("NC_001416.1");
      setSeq(result);
    };

    fetchFASTA();
  }, []);

  const handleCopyToBED = () => {
    const pos = selections[selections.length - 1];
    if (pos) {
      const str = `NC_001416.1\t${pos.start}\t${pos.end}`;
      appendText(str);
    }
  };

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleFindInFasta = () => {
    const textArea = textareaRef.current;
    if (textArea) {
      const text = textArea.value;
      const cursorPosition = textArea.selectionStart;

      const lines = text.split("\n");

      let currentLine = "";
      let cumulativeLength = 0;
      for (const line of lines) {
        cumulativeLength += line.length + 1;
        if (cursorPosition < cumulativeLength) {
          currentLine = line;
          break;
        }
      }

      const parts = currentLine.split("\t");
      if (parts.length >= 3) {
        const firstNumber = parts[1];
        const secondNumber = parts[2];
        alert(`(${firstNumber}, ${secondNumber})`);
        setSel({
          clockwise: true,
          start: parseInt(firstNumber),
          end: parseInt(secondNumber),
        });
      } else {
        alert("Invalid line format");
      }
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(false);
  };

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
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

  return (
    <>
      <Hero />
      <div
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
              zIndex: 1000,
            }}
          >
            <p>
              Drop your <strong>.fasta</strong> or <strong>.bed</strong> file
              here
            </p>
          </div>
        )}

        <div className="columns">
          <div className="column is-half">
            <Fasta
              seq={seq}
              sel={sel}
              setSel={setSel}
              selections={selections}
              setSelections={setSelections}
            />
          </div>

          <Buttons
            handleCopyToBED={handleCopyToBED}
            handleFindInFasta={handleFindInFasta}
          />

          <div className="column is-four-fifths">
            <Bed text={text} textareaRef={textareaRef} setText={setText} />
          </div>
        </div>
      </div>
      <FAQ />
    </>
  );
}

export default App;
