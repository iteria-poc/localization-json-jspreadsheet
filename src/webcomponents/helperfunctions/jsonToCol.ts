import { JsonToCol, LanguagesInput } from "../../@types/interfaces";

const mapLangToSheetColumns = (languages: LanguagesInput) => {
  let columnTitle: Array<object> = [];
  Object.keys(languages).map(
    (title: string) =>
      (columnTitle = [
        ...columnTitle,
        { type: "text", title: `${title}`, width: 150 },
      ])
  );
  return columnTitle;
};

const setKeys = (languages: LanguagesInput): Array<string> => {
  let languagesKeys: Array<string> = [];
  Object.keys(languages).map(
    (titles) => (languagesKeys = [...languagesKeys, titles])
  );
  const keyValue = Object.keys(languages[languagesKeys[0]]);
  return keyValue;
};

const mapLangToSheetData = (languages: LanguagesInput) => {
  let rowsData: Array<object> = [];
  let keys: Array<string> = setKeys(languages);
  let tempRows: any = [];
  let tempCol: Array<object> = [];

  Object.keys(languages).map(
    (titles) => (tempRows = [...tempRows, languages[titles]])
  );
  Object.keys(keys).map((key: any) => {    
    Object.keys(tempRows).map((row:any) => {
      Object.keys(tempRows[row]).map((rowKey:string) => {
        if (rowKey === keys[key]) {
          tempCol = [...tempCol, tempRows[row][rowKey]];
        }
      });
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
