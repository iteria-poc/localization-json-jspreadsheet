import React, { FC } from "react";
import { SpreadsheetRenderType } from "../../@types/interfaces";

const SpreadsheetRender: FC<SpreadsheetRenderType> = (props) => {
  return (
    <div>
      <div ref={props.jRef} />
      <br />
      <input type="button" onClick={props.addRow} value="Add new row" />
      <input type="button" onClick={props.downloadSheet} value="Download" />
    </div>
  );
};

export default SpreadsheetRender;
