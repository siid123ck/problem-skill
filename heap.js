// create class MaxHeap
class MaxHeap{
    constructor(){
        this.values = []; 
    }

    // insert method with parameter val
    insert(val){
        // push the value and call the bubble() function to arrange the order
        this.values.push(val); 
        this.bubbleUp(); 
        // finally return the values
        return this.values;
    }
    bubbleUp(){
        // definde idx to be length of values substracted by 1
        let idx = this.values.length-1;
        //loop unless idx is not greater than 0
        while(idx > 0){
            //set parentIdx and break the code if chile value is less than parentVal
            let parentIdx = Math.floor((idx-1)/2); 
            if(this.values[parentIdx] >= this.values[idx]) break;
            //swap the parent val and child val and update idx to parentIdx
            let temp = this.values[parentIdx]; 
            this.values[parentIdx] = this.values[idx]; 
            this.values[idx] = temp;
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
            let leftChild = leftIdx < this.values.length ? this.values[leftIdx] : -Infinity; 
            let rightChild = rightIdx < this.values.length ? this.values[rightIdx] : -Infinity;
            let parent = this.values[parentIdx]; 
            
            // break the code if parent is greater than both left val and right val
            if(parent > leftChild && parent > rightChild) break; 
            // swap the value accordinngly 
            if(leftChild > rightChild){
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

//create instance Max heap
let list = new MaxHeap(); 
list.insert(17)
list.insert(7)
list.insert(11)
list.insert(6)
list.insert(2)
list.insert(9)
console.log(list)

