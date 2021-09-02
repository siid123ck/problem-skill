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
                currentHead.prev = newNode;
            }
            // increase length by 1 and return this
            this.length++; 
            return this; 
        }

        //pop method 
        pop(){
            // return undefined if length is 0
            if(this.length===0) return undefined; 
            // define removeNode to be current head 
            let removeNode = this.tail; 

            // set the value null to head and tail if length is 1
            if(this.length===1){
                this.head = null; 
                this.tail = null;
            } else {
                //define newTail  and set it to tail and also set next of tail to be null
                let newTail = removeNode.prev;
                this.tail = newTail;
                newTail.next = null;
            }
            //decrease length by 1 and return removeNode
            removeNode.prev = null; 
            this.length--; 
            return removeNode;
        }

        //shift() method
        shift(){
          // return undefined if length is 0
          if(this.length===0) return undefined; 
          // define removeNode to be current head 
          let removeNode = this.head; 

          // set the value null to head and tail if length is 1
          if(this.length===1){
              this.head = null; 
              this.tail = null;
          } else {
              //define newTail  and set it to tail and also set next of tail to be null
              let newHead = removeNode.next;
              this.head = newHead;
              newHead.prev = null;
          }
          // decrease length by 1 and return removeNode
          this.length--; 
          removeNode.next = null; 
          return removeNode;
        }

        //get method which take index as argument
        get(index){
            //return undefined if index is greater or equal to length or less than 0
            if(index >= this.length || index < 0) return undefined; 
            // define getNode to be current head and count equals to 0
            let getNode = this.head;
            let count = 0; 
            //loop unless count is not equal to index
            while(index !== count) {
                //set getNode to be next of getNode
                getNode = getNode.next; 
                count++;
            }
            return getNode;
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