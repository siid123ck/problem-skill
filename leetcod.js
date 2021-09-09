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

function findFib(n){
    let fibNums = [0, 1]; 
    for(let i=2; i<=n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n]
}

// console.log(findFib(440))

function gridTravler(m, n, memo={}){
    let key;
    m<=n? key = m + "," + n : key = n + "," + m;
    if(key in memo) return memo[key];
    if(m===1 & n===0) return 1; 
    if(m===0 || n===0) return 0;
    memo[key] = gridTravler(m-1, n, memo)+gridTravler(m, n-1, memo); 
    // console.log(key)
    return memo[key]; 
}

function gridTravlerTab(m, n){
    let table = Array(m+1).fill().map(()=>Array(n+1).fill(0))
    table[1][1] =1;
    for(let i = 0; i<=m; i++){
        for(let j=0; j<=n; j++){
        //     if(i === 1 && j === 1 ){
        //        table[1][1] = 1;
        //    } else table[i][j] = table[i][j-1] + table[i-1][j]
        const current = table[i][j]; 
        if(j+1 <=n) table[i][j+1] += current;
        if(i+1 <=m) table[i+1][j] += current;
        }
    }
   return table[m][n]

}

// console.log(gridTravlerTab(3, 2))


// function canSum(arr, target){
//     let result ={}; 
//     for(let i=0; i<arr.length; i++){
//         if(result[target-arr[i]] >=0) return [arr[i], target-arr[i]];
//         result[arr[i]] = i;
//     }
//     console.log(result)
//     return false;
// }
// function canSum(arr, target, memo={}, i=0){
//     if(memo[target-arr[i]]>=0) return true;
//     memo[arr[i]]=i;
//     i++;
//     if(i < arr.length) return canSum(arr, target, memo, i);
//     return false;
// }

function canSum(targetSum, nums, memo={}){
    if(targetSum===0) return true; 
    if(targetSum<0) return false;
    if(targetSum in memo) return memo[targetSum];

    for (let num of nums) {
        let remainder = targetSum - num; 
         if(canSum(remainder, nums, memo)) memo[targetSum] = true;
    }
    memo[targetSum] = false;
    return memo[targetSum];
}

function canSumTab(targetSum, nums){
    let table = [true]; 
    for(let i=0; i<=targetSum; i++){
        if(table[i]) {
            for (const num of nums) {
              if((num+i) <= targetSum)  table[num+i] = true;
            }
        }
    }

    console.log(table)
    return table[targetSum]===true;
}

function howSumTab(targetSum, nums){
    let table = [[]]; 
    for(let i =0; i<targetSum; i++){
        if(table[i]) {
            for(const num of nums){
                if(i+num <= targetSum) {
                    table[i+num] = [...table[i], num]
                }
            }
        }
    }

    return table[targetSum];
}

function bestSumTab(targetSum, nums){
    let table = [[]]; 

    for (let i=0; i<targetSum; i++) {
        if(table[i]) {
            for (const num of nums) {
                let combination = [...table[i], num]
                if(!table[i+num] || table[i+num].length>combination.length) 
                table[i+num] = combination;
            }
        }
    }

    return table[targetSum];
}
// console.log(bestSumTab(100, [50, 3, 5, 25]))

function howSum(targetSum, nums, memo={}){
    if(targetSum in memo) return memo[targetSum];
    if(targetSum===0) return []; 
    if(targetSum<0) return null; 

    for (let num of nums) {
        let remainder = targetSum-num; 
        let resultRemainder = howSum(remainder, nums, memo);
        if(resultRemainder){
            memo[targetSum] = [...resultRemainder, num];
            return memo[targetSum]
        } 
    }
    memo[targetSum] = null;
    return memo[targetSum];
}

function bestSum(targetSum, nums, memo={}){
    if(targetSum in memo) return memo[targetSum]
    if(targetSum===0) return []; 
    if(targetSum<0) return null; 
    let sortestCombination = null;

    for (let num of nums) {
        let remainder = targetSum-num; 
        let resultRemainder = bestSum(remainder, nums, memo);
        if(resultRemainder){
            let combination = [...resultRemainder, num];
            if(sortestCombination===null || sortestCombination.length > combination.length) sortestCombination = combination
        } 
    } 
    memo[targetSum] = sortestCombination;
    return memo[targetSum]
}

// console.log(bestSum(500000, [1312, 2045]))

function canConstruct(target, wordBank, memo={}){
    if(target in memo) return memo[target]
    if(target === "") return true; 

    for (let word of wordBank) {
        if(target.indexOf(word)===0){
            let suffix = target.slice(word.length); 
            if(canConstruct(suffix, wordBank, memo)){
                memo[target] = true;
                return true;
            } 
        }
    }
    memo[target] = false;
    return memo[target];
}

function canConstructTab(target, wordBank){
    let table = [true]; 

    for(let i=0; i<target.length; i++){
        if(table[i]){
            for (const word of wordBank) {
                if(target.slice(i, i+word.length)===word){
                    table[i+ word.length] = true;
                }
            }
        }
    }
    console.log(table)
    return table[target.length]===true;
}

function countConstructTab(target, wordBank){
    let table = Array(target.length+1).fill(0)
     table[0] =1;
    for(let i=0; i<target.length; i++){
        if(table[i]){
            for (const word of wordBank) {
                if(target.slice(i, i+word.length)===word){
                    table[i+ word.length] += table[i];
                }
            }
        }
    } 
    console.log(table)
    return table[target.length]; 
}

// console.log(countConstructTab('abcdef', ['de','g', 'ab', 'abc', 'f', 'def']))

function countConstruct(target, wordBank, memo={}){
    if(target in memo) return memo[target];
    if(target === "") return 1; 
    let count = 0;
    
    for (let word of wordBank) {
        if(target.indexOf(word)===0){
            let suffix = target.slice(word.length);
            let resultSuffix = countConstruct(suffix, wordBank, memo); 
            if(resultSuffix) count += resultSuffix;
        }
    }

    memo[target] = count;
    return count;
}

function constructAll(target, wordBank){
    if(target==="") return [[]]; 
    let possibleCombinations =[]; 

    for (let word of wordBank) {
        if(target.indexOf(word)===0){
            let resultSuffix = constructAll(target.slice(word.length), wordBank);
            let resultWays = resultSuffix.map(way=>[word,...way])
            // if(resultSuffix) 
            possibleCombinations.push(...resultWays)
        } 
    }
    return possibleCombinations;
}

function constructAllTab(target, wordBank){
    let table = Array(target.length+1).fill().map(()=>[]); 
    table[0] = [[]]; 
    for(let i=0; i<=target.length; i++){
        if(table[i][0]){
            for (let word of wordBank) {
                if(target.slice(i, i + word.length)===word){
                    let newCombination = table[i].map(subArr => [...subArr, word]); 
                    table[ i + word.length].push(...newCombination)
                }
            }
        }

    }
    
    return table[target.length]
}

console.log(constructAll('abcdef', ['ab', 'd', 'def', 'ed', 'ef', 'c', 'abc']))

function fib(n){
    let table = Array(n+1).fill(0)
    table[1] =1;
    for(let i=0; i<=n; i++){
        console.log(table, table[i+1], table[i+2])
        table[i+1] += table[i];
        table[i+2] += table[i];
        console.log(table, table[i+1], table[i+2])
    }
    return table[n]
}

// console.log(fib(7))

// function knapsack(items, values, target, end=items.length-1){
//     let max = 0;
//     if(end===0) return max; 
//     console.log(items[end])
//     if(items[end] <= target){
//         max = max+ values[end] + knapsack(items, values, target-items[end], end-1)
//     } else{
//         knapsack(items, values, target, end-1)
//     }
//     return max;
// }

// console.log(knapsack([4, 2, 3, 5], [7, 3, 4, 1], 3))