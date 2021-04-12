import React from "react";
import Spreadsheet from "./Spreadsheet";

export default {
  title: "Spreadsheet",
  component: Spreadsheet,
};



export const TwoData = () => (
  <Spreadsheet languages='{"en": {"budget": "BUDGET", "message2": "MESSAGE2"}, "sk": {"budget": "ROZPOCET", "message2": "hlaska 2"}}' />
);
export const ThreeData = () => (
  <Spreadsheet languages='{"en": {"budget": "BUDGET", "message2": "MESSAGE2"}, "sk": {"budget": "ROZPOCET", "message2": "hlaska 2"},"de":{"budget": "BUDGET", "message2": "Meldung"}}' />
);
