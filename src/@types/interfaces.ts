import React from "react";

export interface LanguagesInput {
  lang: string;
}

export interface LanguageMessages {
  messageID: string;
}

export interface SpreadsheetRenderType {
  jRef: React.RefObject<HTMLDivElement>;
  addRow: React.MouseEventHandler<HTMLInputElement>;
  downloadSheet: React.MouseEventHandler<HTMLInputElement>;
}

export interface SpreadsheetType {
    languages:string
}