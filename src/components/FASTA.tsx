const handleSelection = (selection: Selection) => {
    selections.push(selection);
  };



  const resetSelection = () => {
    setSel(undefined);
  };

const FASTA = () => {
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
        onSelection={handleSelection}
      />
    </div>
  );
};

export default FASTA;
