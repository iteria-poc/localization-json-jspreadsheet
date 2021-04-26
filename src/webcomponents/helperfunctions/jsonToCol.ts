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
  const firstLangMessageIDs = new Map();
  Object.keys(languages).map((titles) => {
    firstLangMessageIDs.set(languages[titles], {});
  });

  const rows = messageIDs.map((messageID) =>
    Object.entries(messageID).map((row) => {
      return row[1];
    })
  );
  const rearrangedRow = Object.values(
    firstLangMessageIDs.entries().next().value
  ).map((value, index) => {
    return rows.map((row, i) => {
      return row[index];
    });
  });

  return rearrangedRow;
};

export const jsonToCol = (languages: LanguagesInput): JsonToCol => {
  const messageID = { budget: "budget", message2: "message2" };
  languages = { messageID, ...languages };

  const columnTitle = mapLangToSheetColumns(languages);
  const columnData = mapLangToSheetData(languages);
  return { columnData, columnTitle };
};
