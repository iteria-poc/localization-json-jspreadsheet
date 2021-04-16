import React, { FC, useState } from "react";
import { SpreadsheetRenderType } from "../../@types/interfaces";

const SpreadsheetRender: FC<SpreadsheetRenderType> = ({
  jRef,
  addRow,
  downloadSheet,
  json,
}) => {
  const [showJson, setShowJson] = useState(false);
  return (
    <div>
      <div ref={jRef} />
      <br />
      <input type="button" onClick={addRow} value="Add new row" />
      <input type="button" onClick={downloadSheet} value="Download" />
      <input
        type="button"
        onClick={() => setShowJson(!showJson)}
        value="Toggle Json"
      />
      <div style={{ margin: "10px" }}>{showJson ? json : ""}</div>
    </div>
  );
};

export default SpreadsheetRender;
