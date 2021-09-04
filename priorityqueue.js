//create node class
class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

//create a class PriorityQueue
class PriorityQueue{
    constructor(){
        this.values = [];
    }

    //insert method
    insert(val, priority){
        // create newNode with instance of Node class
        let newNode = new Node(val, priority); 
        //push the newNode, call bubbleUp() to arrange the order and return this
        this.values.push(newNode);
        this.bubbleUp();
        return this;
    }
    bubbleUp(){
        // define idx to be last element
        let idx = this.values.length-1;
        // loop unless priority of parent node is less than priority of child node
        while(idx > 0){
            let parentIdx = Math.floor((idx-1)/2); 
            // break the code if priority of parent node is less than priority of child node, othersie swap
            if(this.values[parentIdx].priority <= this.values[idx].priority) break;
            let tempNode = this.values[parentIdx]; 
            this.values[parentIdx] = this.values[idx];
            this.values[idx] = tempNode;
            idx = parentIdx;
        }
    }
}

// create instance of class PriorityQueue
let list = new PriorityQueue(); 
list.insert('siid', 1)
list.insert('susil', 10)
list.insert('manis', 11)
list.insert('pank', 3)
list.insert('raj', 4)

console.log(list)