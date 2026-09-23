class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        

        // loop throuh each word

        // craft a freq array then convert it to a string for each word

        // add each of the freq strings nto a set 

        // check if a freq string is alr present
            // yes, start adding to the output group
            // no, move on


        let resultHashmap = new Map();

        for(let word of strs){

            let freqArr = new Array(26).fill(0);
            
            for(let ch of word){
                let idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);

                freqArr[idx]++;
            }
            let signature = freqArr.join();

            if(!resultHashmap.has(signature)){
                resultHashmap.set(signature, []);
            }
                resultHashmap.get(signature).push(word);
        }

        let resultArray = [];

        for(let group of resultHashmap.values()){
            resultArray.push(group);
        }

        return resultArray;
    }
}
