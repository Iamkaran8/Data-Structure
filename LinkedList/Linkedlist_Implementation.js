// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }



// class LinkedList {
//     constructor() {
//         this.head = null;
//     }
//     addFirst(data) {
//         const newNode = new Node(data);
//         newNode.next = this.head;
//         this.head = newNode
//     }

//     printVal() {
//         let current = this.head;
//         while (current !== null) {
//             console.log(current.data)
//             current = current.next
//         }
//     }
// }
// const list = new LinkedList()
// list.addFirst(11)
// list.addFirst(12)
// list.addFirst(13)
// list.addFirst(14)
// list.addFirst(15)
// list.printVal()




class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    addLast(data){
        const newNode = new Node(data);
        let current = this.head
        if(!current){
            current = newNode;
            return;
        }

        while(current.next){
            current = current.next
        }   

        current.next = newNode;
    }


    printVal() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data)
            current = current.next
        }
    }
}


const arr = new LinkedList();
arr.addFirst(88)
arr.addFirst(89)
arr.addFirst(90)
arr.addLast(0)
arr.addFirst(91)


arr.printVal()
