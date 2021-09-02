// create Node class 
class Node{
    constructor(val){
        this.val = val; 
        this.next = null; 
        this.prev = null; 
    }
}

// create DLL class
class DLL{
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
                newNode.prev=this.tail;
                //set new tail newNode
                this.tail = newNode;
            }
            //increase the length and return this
            this.length++; 
            return this;
        }

        // unshift method which take val as argument 
        unshift(val){
            
        }
}

// create instance of DLL
let list = new DLL(); 
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
console.log(list)