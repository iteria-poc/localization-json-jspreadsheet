import React from "react";

export interface LanguagesInput {
  [lang: string]: Array<string>;
}

export interface SpreadsheetRenderType {
  jRef: React.RefObject<HTMLDivElement>;
  addRow: React.MouseEventHandler<HTMLInputElement>;
  downloadSheet: React.MouseEventHandler<HTMLInputElement>;
  json: string;
}

export interface SpreadsheetType {
  languages: string;
}

export interface JsonToCol {
  columnData: object;
  columnTitle: object;
}
