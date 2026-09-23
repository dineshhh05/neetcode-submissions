class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        
        let groups = {};

        for(let word of strs){

            let freq = new Array(26).fill(0);

            for(let char of word){
                let idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
                freq[idx]++;
            }

            let key = freq.join(",");

            if (!groups[key]) {
                groups[key] = [];
            }

            groups[key].push(word);
        }

        return Object.values(groups);

    }
}
