import { CsvFileReader } from './CsvFileReader-Inheritance';
import { dateStringToDate } from '../utils';
import { MatchResult } from '../MatchResult'; // use for "type assertion"
// import that defines tuple to describe a row of data
import { MatchData } from '../MatchData';

// this child class inherits features of parent class, we can create an instance
// of this child class passing a "generic" type to parent class
export class MatchReader extends CsvFileReader<MatchData> {
  // an "abstract" to parent class
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult, // type assertion
      row[6],
    ];
  }
}
