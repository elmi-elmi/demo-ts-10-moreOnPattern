"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharectersCollection_1 = require("./CharectersCollection");
const numCollection = new NumbersCollection_1.NumbersCollection([11, 0, -1, 2, 10, 5, 4, 16]);
const sorter = new Sorter_1.Sorter(numCollection);
sorter.sort();
console.log(sorter.collection);
const charCollection = new CharectersCollection_1.CharectersCollection('shahrOkh');
const charSorter = new Sorter_1.Sorter(charCollection);
charSorter.sort();
console.log('hiiiii', charCollection.data);
// const arr = [0, -1, 2,10, 5];
//
// for(const i in arr){
//     const
// }
