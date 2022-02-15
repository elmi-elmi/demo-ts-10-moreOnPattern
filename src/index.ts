import {Sorter} from "./Sorter";
import {NumbersCollection} from "./NumbersCollection";
import{CharectersCollection} from "./CharectersCollection";

const numCollection = new NumbersCollection([11, 0, -1, 2, 10, 5, 4, 16])
const sorter = new Sorter(numCollection);
sorter.sort()
console.log(sorter.collection)


const charCollection = new CharectersCollection('shahrOkh');
const charSorter = new Sorter(charCollection);
charSorter.sort();
console.log('hiiiii',charCollection.data);

// const arr = [0, -1, 2,10, 5];
//
// for(const i in arr){
//     const
// }
