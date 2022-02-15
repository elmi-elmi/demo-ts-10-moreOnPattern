export class NumbersCollection{
    constructor(public data:number[]) {
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