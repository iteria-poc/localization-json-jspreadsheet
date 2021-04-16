import React, { useRef, useEffect, useState } from "react";
import jspreadsheet from "jspreadsheet-ce";
import { jsonToCol } from "../helperfunctions/jsonToCol";
import "../../../node_modules/jspreadsheet-ce/dist/jexcel.css";
import SpreadsheetRender from "./SpreadsheetRender";

const Spreadsheet = (props: any): any => {
  const [json, setJson] = useState({});
  const changed = async () => {
    return setJson(jRef.current.jexcel.getJson());
  };

  const onafterchanged = async () => {
    return setJson(jRef.current.jexcel.getJson());
  };

  const oninserted = async () => {
    return setJson(jRef.current.jexcel.getJson());
  };
  const ondeleted = async () => {
    return setJson(jRef.current.jexcel.getJson());
  };

  let fullRowData = jsonToCol(props.languages);
  const data = fullRowData.columnData;
  const columns: object = fullRowData.columnTitle;

  const jRef: any = useRef(null);
  const options = {
    data: data,
    columns: columns,
    onchange: changed,
    onafterchanges: onafterchanged,
    oninsertrow: oninserted,
    ondeleterow: ondeleted,
  };

  useEffect(() => {
    if (!jRef.current.jspreadsheet) {
      jspreadsheet(jRef.current, options);
    }
  }, [options, json]);

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
      json={JSON.stringify(json)}
    />
  );
};

export default Spreadsheet;
