// time complexity of singlyLink List
// push -> O(1) 
// pop -> O(N)
// search -> O(N)
// access -> O(N)
// remove -> O(1)
// insert -> O(1)

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

    //shift method 
    // unlike in pop method, we dont need to loop through list since we access to next val
    shift(){
          // define removeNode to be current head 
          let removeNode = this.head; 
          //if length is 0, return undefined

          if(this.length===0) return undefined;
  
          //if length is 1, set head and tail value null
          if(this.length===1){ 
              this.head = null; 
              this.tail=null;
          } else{
              this.head = this.head.next; 
          }
          // decrease length by 1, set next removeNode null and return removeNode
          this.length--; 
          removeNode.next = null;
          return removeNode;
    } 

    // get method 
    get(index){
        // return undefined if index is not less than length or is less than 0
        if(index >= this.length || index < 0) return undefined; 

        // define getNode to be current head and count = 0
        let getNode = this.head;
        let count = 0; 

        //loop unless the value of count is not equal to value of index
        while(index !== count){
            getNode = getNode.next; 
            count++; 
        }
        
        //return getNode; 
        return getNode;
    }

    // remove method 
    remove(index){
        // return undefined if index is less than zero or not less than length
        if(index >= this.length || index < 0) return undefined;
        // return pop() method if index is equal to length
        if(index===this.length-1) return this.pop();
        // return shift() method if length is 0
        if(index===0) return this.shift();
        
        // get remove node and its previous node using get() method, also next node to be next of removeNode
        let prevNode = this.get(index-1); 
        let removeNode = prevNode.next; 
        let nextNode = removeNode.next;
        prevNode.next = nextNode; 
        // decrease length by 1 and return removeNode
        this.length--;
        removeNode.next = null;
        return removeNode;
    }

    //insert method 
    insert(index, val){
        // create a newNode with instance of class and store it
        let newNode = new Node(val); 

        // displat invalid index value if index is less than 0 or greater than length
        if(index < 0 || index > this.length) return `Invalid index (${index})`;

        // call push() method if index = length and return true
        if(index === this.length){
            this.push(val); 
            return true;
        }
        // call unshift() method if index  = 0 and return true
        if(index === 0){
            this.unshift(val); 
            return true;
        }

        // store prevNode and nextNode using get() method
        let prevNode = this.get(index-1); 
        let nextNode = prevNode.next; 
        // set newNode to preNode and nextNode to the next of newNode
        prevNode.next = newNode; 
        newNode.next = nextNode;

        // increase length by 1 and return true
        this.length++; 
        return true;
    }

    // reverse list
    reverse(){
        // store current head in current an swap current head and tail
        let current = this.head; 
        this.head = this.tail; 
        this.tail= current;
        // define prev and next to be null
        let prev = null; 
        let next = null; 
        //loop untill current is null
        while(current !== null){
            // first save current.next in variable next and set current.next to be previous node
            next = current.next; 
            current.next = prev;
            // again set prev node to be current node and current node to be next node
            prev = current;
            current = next;
        }
       
        return this;
    }

    reverseRecursive(){
        let current = this.head;
        function helper(prev=null, current){
            if(current.next) helper(current, current.next)
            current.next = prev; 
        }
        helper(null, current);
        this.head = this.tail;
        this.tail = current;
        return this;
    }
}

// create instance of SLL
let l1 = new SLL(); 
let l2 = new SLL(); 
l1.push(2)
l1.push(4)
l1.push(3)

l2.push(5)
l2.push(6)
l2.push(8)
// l2.push(1)

var addTwoNumbers = function(l1, l2) {
    let result = new Node(0); 
    currentNode = result; 
    let carry = 0;
    while(l1.head || l2.head){
        let v1 = l1.head ? l1.head.val : 0;
        let v2 = l2.head ? l2.head.val : 0;
        let sum = v1 + v2 + carry;
        carry = Math.floor(sum/10);
        sum = sum%10;
        currentNode.next = new Node(sum)
        currentNode = currentNode.next;
        if(l1.head) l1.head = l1.head.next;
        if(l2.head) l2.head = l2.head.next;
    }
   if(carry) currentNode.next = new Node(carry)

    return result.next;
 };

 console.log(addTwoNumbers(l1, l2))