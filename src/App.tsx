import 'bulma/css/bulma.min.css';
import { useEffect, useState } from 'react';
import { SeqViz } from "seqviz";
import seqparse, { Seq } from "seqparse";




function App() {

  const [seq, setSeq] = useState<Seq>({ name: "", type: "unknown", seq: "", annotations: [] });

  const seqVizstyle = { height: "100vh" };

  useEffect(() => {
    const fetchFASTA = async () => {
      const result = await seqparse("NC_001416.1");
      setSeq(result);
    };

    fetchFASTA();
  }, []);


  return (
    <>
      <div className="columns">
        <div className="column" id="FASTA">
          <div className="text-area full-size">
            <SeqViz
              style={seqVizstyle}
              name={seq.name}
              seq={seq.seq}
              annotations={seq.annotations}
              seqType={seq.type == "unknown" ? undefined : seq.type}
              viewer='linear'
            />
          </div>
        </div>
        <div className="column">Second column</div>
      </div>
    </>
  )
}

export default App
