import { JsonToCol, LanguagesInput } from "../../@types/interfaces";

const mapLangToSheetColumns = (languages: LanguagesInput) => {
  let columnTitle: Array<object> = Object.keys(
    languages
  ).map((title: string) => ({ type: "text", title: `${title}`, width: 150 }));
  return columnTitle;
};

const setKeys = (languages: LanguagesInput): Array<string> => {
  const keyValue = new Set();
  const reducer = (accumulator: object, currentValue: object) =>
    keyValue.add(Object.keys(currentValue));
  Object.keys(languages)
    .map((titles) => languages[titles])
    .reduce(reducer);
  return keyValue.values().next().value;
};

const mapLangToSheetData = (languages: LanguagesInput) => {
  let rowsData: Array<object> = [];
  let tempCol: Array<object> = [];
  const tempRows: any = Object.keys(languages).map(
    (titles) => languages[titles]
  );
  Object.keys(setKeys(languages)).map((key: string | any) => {
    Object.keys(tempRows).map((row: string | number) => {
      tempCol = [...tempCol, tempRows[row][setKeys(languages)[key]]];
    });
    rowsData = [...rowsData, tempCol];
    tempCol = [];
  });
  return rowsData;
};

export const jsonToCol = (languages: LanguagesInput): JsonToCol => {
  const columnTitle: Array<object> = mapLangToSheetColumns(languages);
  const columnData: Array<object> = mapLangToSheetData(languages);
  return { columnData, columnTitle };
};
