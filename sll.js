//signly link list 

// create a node class 
class Node{
    constructor(val){
        this.val=val; 
        this.next=null;
    }
}

// create singly link list 
class SLL{
    constructor(){
        this.head = null; 
        this.tail = null;
        this.length = 0;
    }

    //push method, it takes value as parameter 
    push(val){
        //create new node with instance of Node class
        let newNode = new Node(val); 

        // set head and tail to newNode if length is zero
        if(this.length===0){
            this.head = newNode; 
            this.tail = this.head;
        } else {
            //set the next of current tail newNode
            this.tail.next = newNode;
            //set new tail newNode
            this.tail = newNode;
        }
        //increase the length and return this
        this.length++; 
        return this;
    }

    //
}

// create instance of SLL
let list = new SLL(); 

console.log(list)