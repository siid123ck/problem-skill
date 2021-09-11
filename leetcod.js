var findMedianSortedArrays = function(nums1, nums2) {
    // merger array 
    let i = 0; 
    let j = 0; 
    let result = [];
    let m = nums1.length;
    let n = nums2.length;
    while(i<m && j <n){
        if(nums1[i] < nums2[j]){
            result.push(nums1[i]); 
            i++; 
        } else{
            result.push(nums2[j]);
            j++;
        }
    }

    while(i<m){
        result.push(nums1[i]); 
        i++; 
    }
    while(j<n){
        result.push(nums2[j]);
        j++;
    }

    // find median 
    let md = (result.length-1)/2; 
    let mdSort = Math.floor(md); 
    let mdLong = Math.ceil(md)
    return result[mdSort] + (result[mdLong]-result[mdSort])/2;
};

// console.log(findMedianSortedArrays([], [2]))

var longestPalindrome = function(s) {
    let max = s[0];
    for(let i=0; i<s.length-1; i++){
        for(j=2; j<=s.length; j++){
            if(checkPalindrom(s.substring(i, j))){
                if(max.length<s.substring(i,j).length) max = s.substring(i,j);
            }
        }
    }

   function checkPalindrom(str){
        let reverseStr = [];
        for (let i=str.length-1; i >= 0; i--) {
            reverseStr.push(str[i])
        }
        return reverseStr.join('')===str;
    }

    return max;
};

// console.log(longestPalindrome("a"))

function findRandomEmployee(employees){
    let totalEmployee = employees.length;
    let randomIndex;
    let randomEmployee;
    while(totalEmployee >= 0){
         randomIndex = Math.floor(Math.random()*totalEmployee)
         randomEmployee = employees[randomIndex]; 
         employees[randomIndex] = employees.pop()
         totalEmployee--;
         console.log(randomEmployee)
    }
    return randomEmployee;
} 

// console.log(findRandomEmployee(['siid', 'susil', 'ramu', 'nabin', 'santosh']))


