import { JsonToCol, LanguagesInput } from "../../@types/interfaces";

const mapLangToSheetColumns = (languages: LanguagesInput) => {
  let columnTitle: Array<object> = Object.keys(languages).map((title) => ({
    type: "text",
    title,
    width: 150,
  }));
  return columnTitle;
};

const translationOf = (ids: object, keys: object) => {
  return Object.values(keys).map((key, i) => {
    return Object.values(ids)[i];
  });
};

const mapLangToSheetData = (languages: LanguagesInput) => {
  let messageIDs: Array<object> = Object.keys(languages).map(
    (titles) => languages[titles]
  );

  let firstLangMessageIDs: object = Object.keys(messageIDs[0]);
  let rows = messageIDs.map((messageID: object) =>
    translationOf(messageID, firstLangMessageIDs)
  );

  const rowData = rows[0].map((_, colIndex) =>
    rows.map((row) => row[colIndex])
  );

  console.log(JSON.stringify(rowData));

  return rowData;
};

export const jsonToCol = (languages: LanguagesInput): JsonToCol => {
  const columnTitle: Array<object> = mapLangToSheetColumns(languages);
  const columnData = mapLangToSheetData(languages);
  return { columnData, columnTitle };
};
