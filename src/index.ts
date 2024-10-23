// // INHERITANCE
// import { MatchReader } from './inheritance/MatchReader-Inheritance';
// import { MatchResult } from './MatchResult';

// // create instance of child class therefore passing argument to parent class
// const reader = new MatchReader('football.csv');
// // instance invokes method in parent class
// reader.read();

// // hover over elements... typescript knows!
// const dateOfFirstMatch = reader.data[0][0];
// console.log('dateOfFirstMatch: ', dateOfFirstMatch);

// let manUnitedWins = 0;

// // loop through data processed/obtain from parent class but provided by child class
// for (let match of reader.data) {
//   if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//     manUnitedWins++;
//   } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
//     manUnitedWins++;
//   }
// }

// console.log(`Man United won ${manUnitedWins} games.`);

// COMPOSITION
import { MatchReader } from './composition/MatchReader-Composition';
import { CsvFileReader } from './composition/CsvFileReader-Composition';
import { MatchResult } from './MatchResult';

// create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
// invoke load method to populate class property 'matches'
matchReader.load();

// hover over elements... typescript knows!
const dateOfFirstMatch = matchReader.matches[0][0];
console.log('dateOfFirstMatch: ', dateOfFirstMatch);

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games.`);

// // COMPLETE COMPOSITION
// import { MatchReader } from './composition/MatchReader-Composition';
// import { CsvFileReader } from './composition/CsvFileReader-Composition';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
// import { ConsoleReport } from './reportTargets/ConsoleReport';
// import { Summary } from './Summary';
// import { HtmlReport } from './reportTargets/HtmlReport';

// // create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');

// // create an instance of MatchReader and pass in something satisfying
// // the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// // invoke load method to populate class property 'matches'
// matchReader.load();

// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   // new ConsoleReport()
//   new HtmlReport()
// );
// summary.buildAndPrintReport(matchReader.matches);
