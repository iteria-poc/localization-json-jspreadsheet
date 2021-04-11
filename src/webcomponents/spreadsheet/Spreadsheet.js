import React, { useRef, useEffect, useState } from "react";
import jspreadsheet from "jspreadsheet-ce";
import data from '../../data/data.json';

import "../../../node_modules/jspreadsheet-ce/dist/jexcel.css";

export default function App(props) {
  //const [sJson,setSJson] = useState('')
  let json;
  const changed = async()=> {
    //const cellName = jexcel.getColumnNameFromId([x,y]);
    json = await jRef.current.jexcel.getJson();
    console.log('on',json);
  }

  const onafterchanged = async()=> {
    json = await jRef.current.jexcel.getJson();
    console.log('after',jRef.current.jexcel.getJson());
  }

  const oninserted = async ()=>{
    json = await jRef.current.jexcel.getJson();
    console.log('in',jRef.current.jexcel.getJson());
  }
  const ondeleted =async ()=> {
    json = await jRef.current.jexcel.getJson();
    console.log('del',jRef.current.jexcel.getJson());
  }
  
  
const datas = JSON.parse(props.languages);
let dataArray = [];
let keys = [];
let columns = [];
let cols = []
let rows = [];
let rowData = [];
let c = [{ type:'text',title:"messageID", width:150 }];
if(datas){
    for(const d in datas){
        c.push({ type:'text',title:`${d}`, width:150,data:'nice' });
        dataArray.push(datas[d])
    }
}
if(dataArray){
    for (const d in dataArray){
        columns.push(dataArray[d])
    }
    for (const d in dataArray[0]){
        // console.log('dada',d);
        keys.push(d)
    }
}
//console.log(Object.keys(dataArray[0]));
// console.log('keys',keys);
if(columns){
    let i = 0;
    for(const key in columns){  
        for (const k in keys){
          let row = [];
           for(let j= 0 ; j < columns.length; j++){
            if(Object.keys(columns[key])[i] == keys[k]){
              row.push({"cols":columns[j][keys[k]]});
              //rows.push(row)
              //console.log('row',row);
            }
           }
           //console.log('row 2',row);
           if(row.length>0){
             rows.push(row);
           }
           row = []
        }
        i++;
    } 
    
}
let r = []
if(rows){
    for(const col in rows){
        if(rows[col].length>0){
          r.push(rows[col])
        }
    }
}
if(r){
  let datas = []
  for(const row in r){
    for(const col in r[row]){
      datas.push(r[row][col]['cols']);
    }
    cols.push(datas);
    datas=[]
  }
}


if(cols){
  let datar = [];
  
  for(let ky = 0; ky<keys.length ; ky++){
    for(let k = 0; k<cols.length; k++){
      if(ky === k){
        let gg = []
        for(let v = 0; v <cols[k].length; v++ ){
          gg.push(cols[k][v])
        }
        let h = [keys[ky]];
        for(let v in gg){
          h = [...h,gg[v]]
        }
        rowData=[h,...rowData]
      }
      // rowData.push(cols[k])
      
    }
  }
  
}


//console.log(keys);
//console.log('r',cols);
  const jRef = useRef(null);
  const options = {
    // url: '/v4/test.json',
    data: rowData,
    columns: c,
    onchange: changed,
    onafterchanges:onafterchanged,
    oninsertrow:oninserted,
    ondeleterow:ondeleted,
  };
 
  useEffect(() => {
    if (!jRef.current.jspreadsheet) {
      jspreadsheet(jRef.current, options);
    }
  }, [options]);

  // useEffect(()=>{
  //   console.log('dasdad');
  //   setSJson(JSON.stringify(json))
  //   console.log("json",sJson,json);
  // },[json])
 
  const addRow = () => {
    jRef.current.jexcel.insertRow();
  };

  const downloadSheet = () => {
    //let json =jRef.current.jexcel.getJson();
    jRef.current.jexcel.download();
    //json.download();
  };
 
  return (
    <div>
      <div ref={jRef} />
      <br />
      <input type="button" onClick={addRow} value="Add new row" />
      <input type="button" onClick={downloadSheet} value="Download" />
    </div>
  );
}