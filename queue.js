// create a class Node
class Node{
    constructor(val){
        this.val = val; 
        this.next = null; 
    }
}

//create a class Queue
class Queue{
    constructor(){
        this.first = null; 
        this.last = null; 
        this.size = 0;
    }

    //enque method with argument val
    enqueue(val){
        // define newNode using instance of Queue
        let newNode = new Node(val);
        // set first and last to be newNode if size is 0
        if(this.size===0){
            this.first = newNode;
            this.last = newNode;
        } else{
            //set next of last node to be newNode and change last node to be newNode
            this.last.next = newNode; 
            this.last = newNode;
        }
        //increament by 1 and return this;
        this.size++; 
        return this;
    }

    // dequeue method
    dequeue(){
        // return undefined if size is 0
        if(this.size===0) return undefined; 
        //set removeNode to be first node and first node to be next of removeNode
        let removeNode = this.first; 
        this.first = removeNode.next;
        //set next of removeNode to be null, increament by 1 and return removeNode
        removeNode.next = null; 
        this.size--;
        return removeNode;
    }
}

// create instance of Queue class
let list = new Queue(); 
list.enqueue(1);
list.enqueue(2);
list.enqueue(3);
list.enqueue(4);
list.enqueue(5);
console.log(list)