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

    // unshift method, it take val aargument 
    unshift(val){
        //crete newNode using Node instance 
        let newNode = new Node(val); 

        //set head and tail newNode if length is 0
        if(this.length===0){
            this.head=newNode;
            this.tail=this.head;
        } else{
            // store current head in variable
            let currentHead = this.head; 
            // set newNode to current head and current head to next of current head 
            this.head = newNode; 
            newNode.next = currentHead;
        }
        // increase length by 1 and return this
        this.length++; 
        return this; 
    }

    // pop method
    pop(){
        // define removeNode to be current head and tailNode without any value
        let removeNode = this.head; 
        let newTail;
        //if length is 0, return undefined
        if(this.length===0) return undefined;

        //if length is 1, set head and tail value null
        if(this.length===1){ 
            this.head = null; 
            this.tail=null;
        } else{
            //loop unless next of removeNode is null
            while(removeNode.next !== null){
                newTail = removeNode; 
                removeNode = removeNode.next;
            }
            //set newTail to the tail 
            this.tail= newTail;
            //set next of tail the value null
            newTail.next = null; 
        }      

        //decrease length by 1 and return removeNode
        this.length--; 
        return removeNode;
    }
}

// create instance of SLL
let list = new SLL(); 
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
console.log(list)