import { SeqViz } from "seqviz";
import { ExternalSelection, Selection } from "../types/seqviz";
import { Seq } from "seqparse";

interface FastaProps {
  loading: boolean;
  seq: Seq;
  sel: ExternalSelection | undefined;
  setSel: (sel: ExternalSelection | undefined) => void;
  selections: Selection[];
  setSelections: (selections: Selection[]) => void;
}

const Fasta: React.FC<FastaProps> = ({
  loading,
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

  if (loading) {
    return (
      <div
        role="status"
        aria-live="polite"
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem"
        }}
        >
          <button
            className="button is-loading"
            disabled
            aria-hidden="true"
            tabIndex={-1}
          />
          <span>Loading FASTA...</span>
        </div>
    )
  }
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
