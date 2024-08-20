import React from "react";

interface ButtonProps {
  handleCopyToBED: () => void;
  handleFindInFasta: () => void;
}

const Buttons: React.FC<ButtonProps> = ({
  handleCopyToBED,
  handleFindInFasta,
}) => {
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

export default Buttons;
