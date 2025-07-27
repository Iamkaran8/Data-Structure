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

//     printList() {
//         let current = this.head;
//         while (current !== null) {
//             console.log(current.data,"-->");

//             current = current.next;
//         }
//     }
// }

// const list = new LinkedList;

// list.addFirst(88);
// list.addFirst(99);

// list.addFirst(111);




// list.printList()






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
        this.head = newNode;
        this.next =
    }


}

