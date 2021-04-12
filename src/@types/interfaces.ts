import React from "react";

export interface LanguagesInput {
  [lang:string]: string;
}

export interface LanguageMessages {
  [messageID:string]: string;
}

export interface SpreadsheetRenderType {
  jRef: React.RefObject<HTMLDivElement>;
  addRow: React.MouseEventHandler<HTMLInputElement>;
  downloadSheet: React.MouseEventHandler<HTMLInputElement>;
  json:any
}

export interface SpreadsheetType {
  languages: string;
}
