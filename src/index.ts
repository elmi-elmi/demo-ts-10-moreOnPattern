class Sorter {
    constructor(public collection:number[]){}

    sort():void{
        const {length} = this.collection
        for(let i=0;i < length;i++){
            for(let j=0; j < length - i - 1;j++){
               // If collection is an array of numbers
            if(this.collection[j] > this.collection[j+1]){
                const leftHand = this.collection[j];
                this.collection[j] = this.collection[j+1];
                this.collection[j+1] = leftHand
            }

            }
        }
    }
}

const sorter = new Sorter([11,0, -1, 2,10, 5,4,16]);
sorter.sort()
console.log(sorter.collection)


// const arr = [0, -1, 2,10, 5];
//
// for(const i in arr){
//     const
// }
