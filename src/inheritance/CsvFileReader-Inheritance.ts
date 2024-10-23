import fs from 'fs';

// "T" is an 'argument' for class... see constructor
export abstract class CsvFileReader<T> {
  data: T[] = []; // property of class

  abstract mapRow(row: string[]): T; // promise to be provided by child class

  constructor(public filename: string) {} // passed in when child class instance is created

  read(): void {
    // read then populate class property "data" with data from "filename"
    this.data = fs
      .readFileSync(this.filename, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}
