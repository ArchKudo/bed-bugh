import "bulma/css/bulma.min.css";
import { useEffect, useState, useRef } from "react";
import { SeqViz } from "seqviz";
import { ExternalSelection, Selection } from "seqviz/dist/selectionContext";
// import CentralIndexContext from "seqviz/dist/centralIndexContext";
import seqparse, { Seq } from "seqparse";


const FAQ = () => {
  return (
    <section id="faq" className="section">
      <div className="container">
        <h1 className="title">FAQ</h1>
        <div className="content">
          <ul>
            <li>What does this app do?</li>
          </ul>
        </div>
      </div>
    </section>
  );
};



const Hero = () => {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <h1 className="title">बेड बघ</h1>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <a href="https://github.com/ArchKudo/bed-bugh" className="has-text-white">
                  GitHub
                </a>
              </div>
              <div className="level-item">
                <a href="#faq" className="has-text-white">
                  FAQ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  const [seq, setSeq] = useState<Seq>({
    name: "",
    type: "unknown",
    seq: "",
    annotations: [],
  });

  const [text, setText] = useState<string>("");

  const [sel, setSel] = useState<ExternalSelection>();

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

  let selections: Selection[] = [];

  let handleSelection = (selection: Selection) => {
    selections.push(selection);
  };

  let handleCopyToBED = () => {
    const pos = selections.pop();
    let str = `NC_001416.1\t${pos?.start}\t${pos?.end}`;
    appendText(str);
  };

  const resetSelection = () => {
    // Reset selection to undefined when mouse is down
    setSel(undefined);
  };

  // const posContext = useContext(CentralIndexContext);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  let handleFindInFasta = () => {
    const textArea = textareaRef.current;
    if (textArea) {
      const text = textArea.value;
      const cursorPosition = textArea.selectionStart;

      const lines = text.split("\n");

      // Find the line under the cursor
      let currentLine = "";
      let cumulativeLength = 0;
      for (const line of lines) {
        cumulativeLength += line.length + 1; // +1 for the newline character
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

  return (
    <>
      <Hero />
      <div className="columns">
        <div className="column is-half">
          <div className="text-area full-size">
            <div onMouseUp={resetSelection}>
              <SeqViz
                style={{ height: "100vh" }}
                name={seq.name}
                seq={seq.seq}
                annotations={seq.annotations}
                seqType={seq.type == "unknown" ? undefined : seq.type}
                viewer="linear"
                selection={sel}
                onSelection={handleSelection}
              />
            </div>
          </div>
        </div>
        <div className="column is-flex is-justify-content-center is-flex-direction-column">
          <button
            className="button is-primary is-outlined"
            onClick={handleCopyToBED}
          >
            Copy selection to BED
          </button>
          <button
            className="button is-primary is-inverted is-outlined"
            onClick={handleFindInFasta}
          >
            Find in FASTA
          </button>
        </div>
        <div className="column is-four-fifths">
          <textarea
            ref={textareaRef}
            id="bedArea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="textarea has-fixed-size"
            placeholder="Enter BED File"
            style={{ height: "100%", maxHeight: "100%" }}
          />
        </div>
      </div>
      <FAQ />
    </>
  );
}

export default App;
