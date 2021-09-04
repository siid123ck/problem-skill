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

    // extract method 
    extract(){
        // set parentIdx to be 0 and set newParent to be last value
        let parentIdx = 0; 
        let newParent = this.values.pop();
        let removeNode = this.values[parentIdx]; 
        this.values[0] = newParent;  

        // loop unless meat the condition
        while(true){
            // set leftIdx and rightidx using simple math
            let leftIdx = parentIdx*2 + 1; 
            let rightIdx = parentIdx*2 + 2; 
            // define left child and rightchild if that particular index is less than langth
            let leftChild = leftIdx < this.values.length ? this.values[leftIdx].priority : Infinity; 
            let rightChild = rightIdx < this.values.length ? this.values[rightIdx].priority : Infinity;
            let parent = this.values[parentIdx].priority; 
            
            // break the code if parent is greater than both left val and right val
            if(parent < leftChild && parent < rightChild) break; 
            // swap the value accordinngly 
            if(leftChild < rightChild){
                swap(this.values, leftIdx, parentIdx)
            } else{
                swap(this.values, rightIdx, parentIdx)
            }
        }
        
        function swap(arr, child, parent){
            let temp = arr[child];
            arr[child] = arr[parent]; 
            arr[parent] = temp; 
            parent = child;
        }
        
        return removeNode;
    }
}

// create instance of class PriorityQueue
let list = new PriorityQueue(); 
list.insert('siid', 1)
list.insert('susil', 10)
list.insert('manis', 11)
list.insert('pank', 3)
list.insert('raj', 4)
list.insert('sharma', 2)
list.insert('susil', 19)
list.insert('manis', 15)
list.insert('pank', 30)
list.insert('raj', 14)

console.log(list)