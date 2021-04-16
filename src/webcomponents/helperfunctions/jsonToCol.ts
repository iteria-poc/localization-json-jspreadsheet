import { JsonToCol, LanguagesInput } from "../../@types/interfaces";

const mapLangToSheetColumns = (languages: LanguagesInput) => {
  const columnTitle = Object.keys(languages).map((title) => ({
    type: "text",
    title,
    width: 150,
  }));
  return columnTitle;
};

const mapLangToSheetData = (languages: LanguagesInput) => {
  const messageIDs = Object.keys(languages).map((titles) => languages[titles]);
  const firstLangMessageIDs = Object.keys(messageIDs[0]);
  const rows = messageIDs.map((messageID: object) =>
    Object.entries(messageID).map((row) => {
      return `${row[0]}:${row[1]}`;
    })
  );
  const rearrangedRow = firstLangMessageIDs.map((key, colIndex) =>
    rows.map((row) => {
      if (row[colIndex].includes(key)) {
        return row[colIndex].split(":")[1];
      }
    })
  );
  return rearrangedRow;
};

export const jsonToCol = (languages: LanguagesInput): JsonToCol => {
  const columnTitle = mapLangToSheetColumns(languages);
  const columnData = mapLangToSheetData(languages);
  return { columnData, columnTitle };
};
