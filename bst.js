// create a class Node
class Node{
    constructor(val){
        this.val = val; 
        this.left = null; 
        this.right = null;
    }
}

// create a class BST 
class BST{
    constructor(){
        this.root = null;
    }

    // insert method 
    insert(val){
        //define newNode to be come from using instance of Node
        let newNode = new Node(val);
        
        //loop unless u insert and return
        if(this.root ===null){
            this.root = newNode;
            return this;
        }
        // store  root in rootNode
        let rootNode = this.root;
        while(true){
            // perform following actions when val is greater than root val
            if(val > rootNode.val){
                // set right of root node to be newNode if right is null, otherwise set rootNode to be right
                if(rootNode.right===null){
                    rootNode.right=newNode; 
                    return this;
                }
                rootNode = rootNode.right;
            } 
            //perform following actions when val is less than or equal to root val
            else{
              // set left of root node to be newNode if left is null, otherwise set rootNode to be left
                if(rootNode.left===null){
                    rootNode.left = newNode; 
                    return this;
                }
                rootNode = rootNode.left;
            }
        }
    }

    // find method 
    find(val){
        //store root in rootNode
        let rootNode = this.root; 
        // loop until u find val 
        while(rootNode){
            // return rootNode if val is matched with root val otherwise move current to rootNode
            if(rootNode.val===val) return rootNode; 
            if(val>rootNode.val){
                rootNode = rootNode.right; 
            } else{
                rootNode = rootNode.left;
            }
        }
        // return not found value or undefined (dont need to write return if need to return undefined)
        return `Not found value ${val}`
    }
}

// create instance of BST
let list = new BST(); 
list.insert(8);
list.insert(6);
list.insert(11);
list.insert(9);
list.insert(15);
list.insert(7);
console.log(list)