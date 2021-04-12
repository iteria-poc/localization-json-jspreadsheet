export const jsonToCol = (languages: string): any => {
  let datas: any = JSON.parse(languages);
  let dataArray: any = [];
  let keys: any = [];
  let columns: any = [];
  let columnsValues: any = [];
  let rows: any = [];
  let fullRowData: any = [];
  let columnTitle: any = [{ type: "text", title: "messageID", width: 150 }];

  const setTitle = () => {
    if (datas) {
      const columnTitles = Object.keys(datas);

      columnTitles.map(
        (title: string): void => (
          columnTitle.push({
            type: "text",
            title: `${title}`,
            width: 150,
          }),
          dataArray.push(datas[title])
        )
      );
    }
  };

  setTitle();

  if (dataArray) {
    const setColumnValue = () => {
      const columnValue = Object.keys(dataArray);
      columnValue.map((val): void => columns.push(dataArray[val]));
    };

    setColumnValue();

    const setKeys = () => {
      const ketValue = Object.keys(dataArray[0]);
      ketValue.map((val): void => keys.push(val));
    };

    setKeys();
  }

  if (columns) {
    const setRow = () => {
      let i = 0;
      const columnKey = Object.keys(columns);
      const keyName = Object.keys(keys);
      columnKey.map((key): void => {
        keyName.map((name): void => {
          let row = [];
          for (let j = 0; j < columns.length; j++) {
            if (Object.keys(columns[key])[i] == keys[name]) {
              row.push({ cols: columns[j][keys[name]] });
            }
          }
          if (row.length > 0) {
            rows.push(row);
          }
          row = [];
        });
        i++;
      });
    };

    setRow();
  }

  let tempColumsValues: any = [];
  if (rows) {
    const tempColValues = () => {
      const tempColumnValue = Object.keys(rows);
      tempColumnValue.map((val): void => {
        if (rows[val].length > 0) {
          tempColumsValues.push(rows[val]);
        }
      });
    };

    tempColValues();
  }

  if (tempColumsValues) {
    const setColumnValues = () => {
      let datas: any = [];
      const values = Object.keys(tempColumsValues);
      values.map((value): void => {
        const columnNumber = Object.keys(tempColumsValues[value]);
        columnNumber.map((number): void => {
          datas.push(tempColumsValues[value][number]["cols"]);
        });
        columnsValues.push(datas);
        datas = [];
      });
    };

    setColumnValues();
  }

  if (columnsValues) {
    const setRowValues = () => {
      for (let key = 0; key < keys.length; key++) {
        for (let columnKey = 0; columnKey < columnsValues.length; columnKey++) {
          if (key === columnKey) {
            let rowValue = [];
            for (let v = 0; v < columnsValues[columnKey].length; v++) {
              rowValue.push(columnsValues[columnKey][v]);
            }
            let fullRow = [keys[key]];
            for (let v in rowValue) {
              fullRow = [...fullRow, rowValue[v]];
            }
            fullRowData = [fullRow, ...fullRowData];
          }
        }
      }
    };

    setRowValues();
  }
  return { fullRowData, columnTitle };
};
