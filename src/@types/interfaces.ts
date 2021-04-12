import React from "react";

export interface LanguagesInput {
  [lang: string]: object;
}

export interface LanguageMessages {
  [messageID: string]: any;
}

export interface SpreadsheetRenderType {
  jRef: React.RefObject<HTMLDivElement>;
  addRow: React.MouseEventHandler<HTMLInputElement>;
  downloadSheet: React.MouseEventHandler<HTMLInputElement>;
  json: any;
}

export interface SpreadsheetType {
  languages: string;
}

export interface JsonToCol {
  columnData: object;
  columnTitle: object;
}
