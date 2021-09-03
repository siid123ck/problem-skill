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