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

// console.log(countConstructTab('abcdefgg', ['de','d', 'e', 'c', 'ab', 'abc', 'f', 'def']))

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

function constructAll(target, wordBank, memo={}){
    if(target in memo) return memo[target]; 
    if(target==="") return [[]]; 
    let possibleCombinations =[]; 

    for (let word of wordBank) {
        if(target.indexOf(word)===0){
            let resultSuffix = constructAll(target.slice(word.length), wordBank, memo);
            let resultWays = resultSuffix.map(way=>[word,...way])
            // if(resultSuffix) 
            possibleCombinations.push(...resultWays)
        } 
    }
    memo[target] = possibleCombinations;
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

// console.log(constructAll('aeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['ae', 'eeeeeee', 'eee', 'eeeed', 'eed']))

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

function knapsack(items, values, target, end=items.length, memo={}){
    let key= target+end
    if(key in memo) return memo[key];
    if(end===0 || target===0) return 0; 
    // let max = 0;
    if(items[end-1] <= target){
        memo[key] = Math.max(values[end-1] + knapsack(items, values, target-items[end-1], end-1), knapsack(items, values, target, end-1))
    } else{
       return knapsack(items, values, target, end-1)
    }
    return memo[key];
}

function knapsackTab(items, values, target, end=items.length){
    let table = Array(end+1).fill([]).map(()=>Array(target+1).fill(0))
    for(let i=1; i<=end; i++){
        for(let j=1; j<=target; j++){
            if(items[i-1]<=j){
                table[i][j] = Math.max((values[i-1] + table[i-1][j-items[i-1]]), table[i-1][j])
            } else{
                table[i][j] = table[i-1][j]
            }
        }
    }
    // console.log(table)
    return table[end][target]
}

function unboundedKnapsack(items, values, target, end = values.length, memo={}){
    let key = target+end;
    if(key in memo) return memo[key];
    if(end===0 || target===0) return 0; 
    if(items[end-1] > target){
        return unboundedKnapsack(items, values, target, end-1)
    } else {
        memo[key] =  Math.max(values[end-1] + unboundedKnapsack(items, values, target-items[end-1], end), unboundedKnapsack(items, values, target, end-1))
    }

    return memo[key]
}

console.log(unboundedKnapsack([7, 2, 3, 4, 6], [10, 7, 8, 9, 13], 8))

function findArrSum(arr, targetSum){
    let table = Array(arr.length+1).fill([]).map(()=>Array(targetSum+1).fill(false))
    for(let i = 0; i< arr.length; i++){
        table[i][0] = true;
    }
    for(let i= 1; i<=arr.length; i++){
        for(let j=1; j<=targetSum; j++){
              if(i !==0 && arr[i-1] <= j){
              table[i][j] =  table[i-1][j-arr[i-1]] || table[i-1][j]
            }  else{
                table[i][j] = table[i-1][j]
            }
             
        }
    }
    return table[arr.length][targetSum]
}



function findArrSumMem(arr, target, n=arr.length, memo={}){
    let key = target + n; 
    if(key in memo) return memo[key]
    
    if(target===0) memo[key] = true;
    if(n===0 && target !==0) memo[key] =  false;

    if(arr[n-1] > target) memo[key] =findArrSumMem(arr, target, n-1); 
    memo[key] = findArrSumMem(arr, target, n-1) || findArrSumMem(arr, target-arr[n-1], n-1)
}
// console.log(findArrSumMem([2, 8, 3, 33, 43,54,61, 234, 132, 34, 1322, 122,55, 43, 456, 112, 123, 34, 1232, 23434, 43454,43434, 43545, 4335, 4534, 3543, 342, 33, 45334, 43434, 3443, 344334, 4343, 3445, 434, 344343, 54345, 453545, 43434,34543], 94934849034455834813))


function howFindArrSum(arr, target){ 
    let table = Array(arr.length+1).fill([]).map(()=>Array(target+1).fill(null)); 
    for(let i =0; i<=arr.length; i++){
        table[i][0] = [];
    }

    for(let i=1; i<=arr.length; i++){
        for(let j=1; j<=target; j++){
            if(arr[i-1] > j){
                table[i][j] = table[i-1][j];
            } else{
                if(table[i-1][j-arr[i-1]]){
                    table[i][j] = [...table[i-1][j-arr[i-1]], arr[i-1]]
                } else {
                    table[i][j] = table[i-1][j]
                }
            }
        }
    }

    return table[arr.length][target]
}
// console.log(howFindArrSum([3, 4, 4], 8))

// function countArrSum(arr, target){
//     let table = Array(arr.length+1).fill([]).map(()=>Array(target+1).fill([])); 
//     for(let i=0; i<=arr.length; i++){
//         table[i][0] = [[]]
//     }

//     let combination =[];

//     for(let i=1; i<=arr.length; i++){
//         for(let j=1; j<=target; j++){
//             if(arr[i-1] > j) {
//                 table[i][j] = table[i-1][j]
//             } else{
//                 console.log(table[i][j])
//                 if(table[i-1][j-arr[i-1]][0]){
//                     // combination = [...table[i-1][j-arr[i-1]], arr[i-1]];  
//                     combination = table[i-1][j-arr[i-1]].map(subArr=>[...subArr, arr[i-1]])                 
//                     table[i][j].push(...combination)
//                 } else{
//                    combination = table[i-1][j]
//                    table[i][j].push(...combination)
//                 }
//             }
//         }
//     }
//     console.log(table)
//     return table[arr.length][target]
// }
// console.log(countArrSum([2, 3, 5, 4, 1], 5))

function subSetEqual(arr, n=arr.length){
  let arrSum = arr.reduce((total, val)=> total+val); 
  if(arrSum%2 === 1) return false;
  return findArrSum(arr, arrSum/2, n)
}
// console.log(subSetEqual([3, 7, 4, 14]))

function countSubArrSum(arr, target){
    let table = Array(arr.length+1).fill([]).map(()=>Array(target+1).fill(0)); 
    for(let i=0; i<=arr.length; i++){
        table[i][0] = 1; 
    }

    for(let i=1; i<=arr.length; i++){
        for(let j=1; j<=target; j++){
            if(arr[i-1] > j){
                table[i][j] = table[i-1][j]; 
            } else{
                // if(table[i-1][j-arr[i-1]]){
                    // console.log(i, j, table)
                    table[i][j] = table[i-1][j-arr[i-1]] + table[i-1][j]
                    // console.log(table[i-1][j-arr[i-1]], table[i][j], i , j)
                // } else{
                //     table[i][j] = table[i-1][j]
                // }
            }
        }
    }
    // console.log(table)
    return table[arr.length][target]
}

// console.log(countSubArrSum([1, 14, 12, 1, 31, 1, 1, 1, 1, 1], 49))

function minSubsetSumDiff(arr){
    let arrSum = arr.reduce((total, element)=>total+element); 
    let table  = Array(arr.length+1).fill([]).map(()=>Array(arrSum+1).fill(false)); 
    let minDiff = Infinity;
    let sum1, sum2;

    for(let i=0; i<=arr.length; i++){
        for(let j=0; j<=arrSum; j++){
            if(j===0){
                table[i][j] = true
            } else if(i===0){
                table[i][j] = false;
            } else if(arr[i-1]>j){
                table[i][j] = table[i-1][j]
            } else{
                table[i][j] = table[i-1][j] || table[i-1][j-arr[i-1]]
            }
        }
    }
    let minSum = Math.floor(arrSum/2)
    for(let i=0; i<=minSum; i++){
         sum1 =  i; 
         sum2 = arrSum - i ;
        if(table[arr.length][sum1] && minDiff > Math.abs(sum1-sum2)){
            minDiff = Math.abs(sum1-sum2);
        }
    }

    return minDiff;
}

// console.log(minSubsetSumDiff([2, 4, 6, 332])) 

function toalSubmetWithDiff(nums, target){
    let numsSum = nums.reduce((total, element)=> total + element); 
    let table = Array(numsSum+1).fill([]).map(()=>Array(nums.length+1).fill(0)); 
    let sum1, sum2, count=0;

    for(let i =0; i<=numsSum; i++){
        for(let j=0; j<=nums.length; j++){
            if(i===0){
                table[i][j] = 1;
            } else if(j===0){
                table[i][j] = 0
            }
             else if(nums[j-1] > i){
                table[i][j] = table[i][j-1]; 
            } else {
                if(table[i-nums[j-1]][j-1]){
                    table[i][j] = table[i-nums[j-1]][j-1] + table[i][j-1]
                } else {
                    table[i][j] = table[i][j-1]
                }
            }
        }
    }
    
    let minSubSum = Math.floor(numsSum/2)
    for(let i=0; i<=minSubSum; i++){
        sum1 = i; 
        sum2 = numsSum-i;
        if(table[i][nums.length] && Math.abs(sum1-sum2)===target) count += table[i][nums.length]
    }
    return count;
}

// console.log(toalSubmetWithDiff([1, 0, 0], 1))