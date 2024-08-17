import { Ref, Dispatch, SetStateAction } from "react";

type Props = {
    text: string,
    textareaRef: Ref<HTMLTextAreaElement>,
    setText: Dispatch<SetStateAction<string>>

};

const Bed = (props: Props) => {
  return (
    <textarea
      ref={props.textareaRef}
      id="bedArea"
      value={props.text}
      onChange={(e) => props.setText(e.target.value)}
      className="textarea has-fixed-size"
      placeholder="Enter BED File"
      style={{ height: "100%", maxHeight: "100%" }}
    />
  );
};

export default Bed;