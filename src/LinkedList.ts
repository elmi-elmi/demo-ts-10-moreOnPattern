import {Sorter} from "./Sorter";
class MyNode {
    next: MyNode | null = null;

    constructor(public data: number) {
    }
}

export class LinkedList extends Sorter{
    head: MyNode | null = null;

    add(data: number): void {
        const node = new MyNode(data)
        if (!this.head) {
            this.head = node
            return
        }

        let tail = this.head;
        while (tail.next) {
            tail = tail.next
        }

        tail.next = node;
    }

    get length(): number {
        if (!this.head) return 0;

        let counter = 1;
        let node = this.head

        while (node.next) {
            counter++

            node = node.next;
        }
        return counter;
    }

    at(index: number): MyNode {
        if (!this.head) throw new Error('Index out of bounds');

        let counter: number = 0;
        let node:MyNode|null = this.head;

        while (node) {
            if (counter === index) {
                return node
            }
            counter++
            node = node.next;
        }


        throw new Error('Index out of bounds');
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        if (!this.head) throw new Error('List is empty');
        return this.at(leftIndex).data > this.at(rightIndex).data
    }

    swap(leftIndex: number, rightIndex: number) {
        const leftHand = this.at(leftIndex).data;
        this.at(leftIndex).data = this.at(rightIndex).data;
        this.at(rightIndex).data = leftHand;
    }


    print():void{
        if(!this.head) throw new Error('List is empty.');
        let node:MyNode|null = this.head;
        while (node){
            console.log(node.data)
            node = node.next;
        }

    }

}



