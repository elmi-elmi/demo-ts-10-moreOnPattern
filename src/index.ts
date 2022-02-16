import {Sorter} from "./Sorter";
import {NumbersCollection} from "./NumbersCollection";
import{CharectersCollection} from "./CharectersCollection";
import {LinkedList} from "./LinkedList";


const numColl = new NumbersCollection([1,1,1,1,2,3,1,3,-2,-2,2]);
numColl.sort();
console.log(numColl.data)

const charColl = new CharectersCollection('sYhaXhrokhX');
charColl.sort();
console.log(charColl.data)

const linkColl = new LinkedList();
linkColl.add(-2);
linkColl.add(-1);
linkColl.add(2);
linkColl.add(3);
linkColl.add(0);

linkColl.sort();
linkColl.print()
//
// const linkedList = new LinkedList();
// linkedList.add(5);
// linkedList.add(-1);
// linkedList.add(0);
// linkedList.add(1);
// linkedList.add(10);
// linkedList.add(-2);
//
// const sorterLinked = new Sorter(linkedList);
// sorterLinked.sort();
// linkedList.print()
//
//
//
// const numCollection = new NumbersCollection([11, 0, -1, 2, 10, 5, 4, 16])
// const sorter = new Sorter(numCollection);
// sorter.sort()
// console.log(sorter.collection)
//
//
// const charCollection = new CharectersCollection('shahrOkh');
// const charSorter = new Sorter(charCollection);
// charSorter.sort();
// console.log(charCollection.data);

// const arr = [0, -1, 2,10, 5];
//
// for(const i in arr){
//     const
// }
