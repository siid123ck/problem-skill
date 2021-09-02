// create a class Node
class Node{
    constructor(val){
        this.val = val; 
        this.next= null; 
    }
}

// create a class Stack 
class Stack{
    constructor(){
        this.first = null; 
        this.last = null; 
        this.size = 0; 
    }

    // push method with argument val
    push(val){
        //define newNode with instance of class
        let newNode = new Node(val); 

        //set newNode to first and last if size is 0
        if(this.size===0){
            this.first = newNode; 
            this.last = this.first;
        } else {
            //store first node and set first node to next of first node then set first node to be newNode
            let tempNode = this.first; 
            this.first = newNode;
            newNode.next = tempNode;
        }
        // increase size by 1 and return this
        this.size++; 
        return this; 
    }

    // pop() method 
    pop(){
        // return undefined if size is 0
        if(this.size===0) return undefined;

        //define removeNode to be first node and set first node to be next of removNode
        let removeNode = this.first; 
        this.first = removeNode.next;
        // set next of removeNode to be null, decrement by 1 and return removeNode
        removeNode.next = null; 
        this.size--;
        return removeNode;
    }
}

// create new instance of Stack class 
let list = new Stack(); 
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
console.log(list)