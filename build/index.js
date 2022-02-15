"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const LinkedList_1 = require("./LinkedList");
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(5);
linkedList.add(-1);
linkedList.add(0);
linkedList.add(1);
linkedList.add(10);
linkedList.add(-2);
const sorterLinked = new Sorter_1.Sorter(linkedList);
sorterLinked.sort();
linkedList.print();
// const numCollection = new NumbersCollection([11, 0, -1, 2, 10, 5, 4, 16])
// const sorter = new Sorter(numCollection);
// sorter.sort()
// console.log(sorter.collection)
//
//
// const charCollection = new CharectersCollection('shahrOkh');
// const charSorter = new Sorter(charCollection);
// charSorter.sort();
// console.log('hiiiii',charCollection.data);
// const arr = [0, -1, 2,10, 5];
//
// for(const i in arr){
//     const
// }
