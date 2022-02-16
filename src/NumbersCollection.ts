import {Sorter} from "./Sorter";
export class NumbersCollection extends Sorter{
    constructor(public data:number[]) {
        super();
    }
    get length():number{
        return this.data.length
    }

    compare(leftHand:number, rightHand:number):boolean{
        return this.data[leftHand] > this.data[rightHand]
    }

    swap(leftIndex:number, rightIndex:number):void{
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;

    }
}