import React from "react";

export interface LanguagesInput {
  [languages: string]: object;
}

export interface SpreadsheetRenderType {
  jRef: React.RefObject<HTMLDivElement>;
  addRow: React.MouseEventHandler<HTMLInputElement>;
  downloadSheet: React.MouseEventHandler<HTMLInputElement>;
  json: string;
}

export interface SpreadsheetType {
  languages: { [languages: string]: object };
}

export interface JsonToCol {
  columnData: object;
  columnTitle: object;
}
