import React, { useRef, useEffect } from "react";
import jspreadsheet from "jspreadsheet-ce";
import { jsonToCol } from "../helperfunctions/jsonToCol";
import "../../../node_modules/jspreadsheet-ce/dist/jexcel.css";
import SpreadsheetRender from "./SpreadsheetRender";

const Spreadsheet = (props: any) => {
  let json;
  const changed = async () => {
    json = await jRef.current.jexcel.getJson();
  };

  const onafterchanged = async () => {
    json = await jRef.current.jexcel.getJson();
  };

  const oninserted = async () => {
    json = await jRef.current.jexcel.getJson();
  };
  const ondeleted = async () => {
    json = await jRef.current.jexcel.getJson();
  };

  let fullRowData = jsonToCol(props.languages);

  const jRef: any = useRef(null);
  const options = {
    data: fullRowData.fullRowData,
    columns: fullRowData.columnTitle,
    onchange: changed,
    onafterchanges: onafterchanged,
    oninsertrow: oninserted,
    ondeleterow: ondeleted,
  };

  useEffect(() => {
    if (!jRef.current.jspreadsheet) {
      jspreadsheet(jRef.current, options);
    }
  }, [options]);

  const addRow = () => {
    jRef.current.jexcel.insertRow();
  };

  const downloadSheet = () => {
    jRef.current.jexcel.download();
  };

  return (
    <SpreadsheetRender
      jRef={jRef}
      addRow={addRow}
      downloadSheet={downloadSheet}
    />
  );
};

export default Spreadsheet;
