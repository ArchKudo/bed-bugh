// The button column

// Append new line to the bed file
const appendText = (newText: string) => {
  setText((prevText) => prevText + "\n" + newText);
};

// Copy selection to bed file
const handleCopyToBED = () => {
  const pos = selections.pop();
  const str = `NC_001416.1\t${pos?.start}\t${pos?.end}`;
  appendText(str);
};

// Get current line under cursor and select the position in the SeqViz view
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

const Knobs = () => {
  return (
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
  );
};

export default Knobs;
