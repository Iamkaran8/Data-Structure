


// // // class Node {
// // //     constructor(data) {
// // //         this.data = data;
// // //         this.next = null
// // //     }
// // // }


// // // class LinkedList {
// // //     constructor() {
// // //         this.head = null;
// // //     }


// // //     addFirst(data) {
// // //         const newNode = new Node(data)
// // //         newNode.next = this.head;
// // //         this.head = newNode
// // //     }

// // //     addlast(data) {
// // //         const newNode = new Node(data);
// // //         let current;
// // //         if (!this.head) {
// // //             this.head = newNode
// // //         } else {
// // //             let current = this.head;
// // //             while (current.next) {
// // //                 current = current.next
// // //             }
// // //             current.next = newNode;
// // //         }
// // //     }

// // //     printAllValue() {
// // //         let current = this.head;

// // //         while (current) {
// // //             console.log(current.data)
// // //             current = current.next
// // //         }
// // //     }
// // // }



// // // const li = new LinkedList();
// // // li.addFirst("First 1");
// // // li.addlast("Last")
// // // li.addFirst("First");
// // // li.addlast(99)
// // // li.printAllValue()






// // class Node {
// //     constructor(data) {
// //         this.data = data;
// //         this.next = null;
// //     }
// // }


// // class LinkedList {
// //     constructor() {
// //         this.head = null
// //     }

// //     addFirst(data) {
// //         const newNode = new Node(data);
// //         newNode.next = this.head;
// //         this.head = newNode
// //     }

// //     printValue() {
// //         let current = this.head;
// //         while (current) {
// //             console.log(current.data);

// //             current = current.next;

// //         }
// //     }

// //     addAtLast(data) {
// //         const newNode = new Node(data);

// //         if (!this.head) {
// //             this.head = newNode;
// //         } else {
// //             let current = this.head;
// //             while (current.next) {
// //                 current = current.next
// //             }
// //             current.next = newNode
// //         }
// //     }

// //     addAtindex(index, data) {
// //         const newNode = new Node(data);

// //         if (index < 0) {
// //             console.log("Not able to add At", index)
// //             return
// //         }
// //         let current = this.head;
// //         for (let i = 0; i < index - 1; i++) {
// //             current = current.next
// //         }

// //         newNode.next = current.next
// //         current.next = newNode;
// //     }


// //     removeTop() {
// //         this.head = this.head.next;
// //     }

// //     removeLast(){
// //         let current = this.head;
// //         while(current.next.next){
// //             current = current.next
// //         }

// //         current.next = null
// //     }
// // }


// // const li = new LinkedList();

// // li.addAtLast(10)
// // li.addAtLast(9)
// // li.addAtLast(8)
// // li.addAtLast(6)
// // li.addAtindex(1, 2)

// // li.printValue()


// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     // Add At First
//     addFirst(data) {
//         const newNode = new Node(data);
//         newNode.next = this.head;
//         this.head = newNode
//     }

//     // Add At Last
//     addLast(data) {
//         const newNode = new Node(data);
//         let current = this.head;
//         if (!this.head) {
//             this.head = newNode;
//             return
//         } else {
//             while (current.next) {
//                 current = current.next;
//             }
//         }

//         current.next = newNode
//     }

//     // Add At Specific Index
//     addAtIndex(index, data) {
//         const newNode = new Node(data);
//         if (index < 0 || index > this.size()) {
//             console.log("We Can't Add At This Index");
//             return
//         }else{
//             let current = this.head;
//             for(let i=0; i< index-1;i++){
//                 current =current.next
//             }
//             newNode.next = current.next;
//             current.next = newNode
//         }
//     }
// //     addAtindex(index, data) {
// //         const newNode = new Node(data);

// //         if (index < 0) {
// //             console.log("Not able to add At", index)
// //             return
// //         }
// //         let current = this.head;
// //         for (let i = 0; i < index - 1; i++) {
// //             current = current.next
// //         }

// //         newNode.next = current.next
// //         current.next = newNode;
// //     }


//     // To Find The Size Of The Linkedlist
//     size() {
//         let count = 0;
//         let current = this.head;
//         while (current) {
//             count++
//             current = current.next
//         }
//         return count
//     }

//     printLinkedList() {
//         let current = this.head;

//         while (current) {
//             console.log(current.data)
//             current = current.next
//         }

//     }
// }


// const list = new LinkedList();
// list.addLast(99)
// list.addFirst(1)
// list.addLast(11)
// list.addLast(10)
// list.addLast(12)
// list.addFirst(2)
// list.addFirst(3)
// list.addAtIndex(20, 10)
// list.addAtIndex(1,100)
// list.printLinkedList()
// list.size()









class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}


class LinkedList {
    constructor(){
        this.head = null;
    }


    addFirst(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    addLast(data){
        const newNode = new Node(data);
        let current = this.head;
        while(current.next !== null){
            current = current.next
        }
        current.next = newNode
    }


    print(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next
        }
    }
}


const list = new LinkedList();
list.addFirst(100);
list.addFirst(10);
list.addFirst(90);
list.addFirst(101);
list.print()