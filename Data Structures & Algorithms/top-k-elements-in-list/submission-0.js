class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let freqMap = new Map();

        for(let num of nums){
            if(!freqMap.has(num)){
                freqMap.set(num, 1);
            } else {
                let currentFreq = freqMap.get(num);
                currentFreq++;
                freqMap.set(num, currentFreq);
            }
        }

        let result = [];

        for(let key of freqMap.keys()){
            if(freqMap.get(key) >= k){
                result.push(key);
            }
        }

        return result;


    }
}
