import xlsx from "xlsx";
import moment from "moment";
import path from "path";
import { Data } from "./model/data.model";

export const data: Data[] = [];

const file = xlsx.readFile(path.join(__dirname, "../SampleInput.xlsx"), { cellDates: true });
const sheets = file.SheetNames;

for (let i = 0; i < sheets.length; i++) {
  //convert to JSON
  const temp: Data[] = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
  temp.forEach((res: Data) => {
    const date = moment(res.Time);
    date.add(4, "seconds"); //add 4 to second
    res.Time = date.format("YYYY-MM-DD HH:mm:ss");
    data.push(res);
  });
}