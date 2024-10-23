import { dateStringToDate } from '../utils';
// import that defined tuple to describe a row of data
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = []; // property of class

  // pass in the specific kind of reader e.g. CsvFileReader
  constructor(public reader: DataReader) {}

  load(): void {
    // invoke reader's read method to obtain formatted data
    this.reader.read();
    // assign data transformed to MatchData type to class property
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}
