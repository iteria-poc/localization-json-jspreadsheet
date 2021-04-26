import React from "react";
import Spreadsheet from "./Spreadsheet";

export default {
  title: "Spreadsheet",
  component: Spreadsheet,
};

const twoJsons = {
  en: { budget: "BUDGET", message2: "MESSAGE2" },
  sk: { budget: "ROZPOCET", message2: "hlaska 2" },
};
const threeJson = {
  en: { budget: "BUDGET", message2: "MESSAGE2" },
  sk: { budget: "ROZPOCET", message2: "hlaska 2" },
  de: { budget: "BUDGET", message2: "Meldung" },
};

export const TwoData = () => <Spreadsheet languages={twoJsons} />;
export const ThreeData = () => <Spreadsheet languages={threeJson} />;
