import { JsonToCol, LanguagesInput } from "../../@types/interfaces";

const mapLangToSheetColumns = (languages: LanguagesInput) => {
  let columnTitle: Array<object> = Object.keys(languages).map((title) => ({
    type: "text",
    title,
    width: 150,
  }));
  return columnTitle;
};

const mapLangToSheetData = (languages: LanguagesInput) => {
  let messageIDs = Object.keys(languages).map((titles) => languages[titles]);
  let firstLangMessageIDs = Object.keys(messageIDs[0]);
  let rows = messageIDs.map((messageID: object) =>
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
  const columnTitle: Array<object> = mapLangToSheetColumns(languages);
  const columnData = mapLangToSheetData(languages);
  return { columnData, columnTitle };
};
