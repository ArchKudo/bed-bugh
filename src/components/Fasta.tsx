import { SeqViz } from "seqviz";
import { ExternalSelection, Selection } from "seqviz/dist/selectionContext";
import { Seq } from "seqparse";

interface FastaProps {
  seq: Seq;
  sel: ExternalSelection | undefined;
  setSel: (sel: ExternalSelection | undefined) => void;
  selections: Selection[];
  setSelections: (selections: Selection[]) => void;
}

const Fasta: React.FC<FastaProps> = ({
  seq,
  sel,
  setSel,
  selections,
  setSelections,
}) => {
  const resetSelection = () => {
    setSel(undefined);
  };

  const handleSelectionWithUpdate = (selection: Selection) => {
    setSelections([...selections, selection]);
  };

  return (
    <div onMouseUp={resetSelection}>
      <SeqViz
        style={{ height: "100vh" }}
        name={seq.name}
        seq={seq.seq}
        annotations={seq.annotations}
        seqType={seq.type === "unknown" ? undefined : seq.type}
        viewer="linear"
        selection={sel}
        onSelection={handleSelectionWithUpdate}
      />
    </div>
  );
};

export default Fasta;
