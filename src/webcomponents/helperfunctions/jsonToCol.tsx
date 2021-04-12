
export const jsonToCol=(languages:any)=>{
let datas:any = JSON.parse(languages);
let dataArray :any= [];
let keys:any = [];
let columns:any = [];
let columnsValues:any = [];
let rows:any = [];
let fullRowData:any = [];
let columnTitle:any = [{ type: "text", title: "messageID", width: 150 }];
if (datas) {
  for (const d in datas) {
    columnTitle.push({
      type: "text",
      title: `${d}`,
      width: 150,
      data: "nice",
    });
    dataArray.push(datas[d]);
  }
}
if (dataArray) {
  for (const d in dataArray) {
    columns.push(dataArray[d]);
  }
  for (const d in dataArray[0]) {
    keys.push(d);
  }
}
if (columns) {
  let i = 0;
  for (const key in columns) {
    for (const k in keys) {
      let row = [];
      for (let j = 0; j < columns.length; j++) {
        if (Object.keys(columns[key])[i] == keys[k]) {
          row.push({ cols: columns[j][keys[k]] });
        }
      }
      if (row.length > 0) {
        rows.push(row);
      }
      row = [];
    }
    i++;
  }
}
let columsValues = [];
if (rows) {
  for (const col in rows) {
    if (rows[col].length > 0) {
      columsValues.push(rows[col]);
    }
  }
}
if (columsValues) {
  let datas = [];
  for (const value in columsValues) {
    for (const columnNumber in columsValues[value]) {
      datas.push(columsValues[value][columnNumber]["cols"]);
    }
    columnsValues.push(datas);
    datas = [];
  }
}

if (columnsValues) {
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
}
return {fullRowData,columnTitle};
}
