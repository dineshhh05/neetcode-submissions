class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length != t.length){
            return false;
        }

        let freqArr = new Array(26).fill(0);

        for(let ch of s){
            let idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);

            freqArr[idx]++;
        }

        for(let ch of t){
            let idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);

            freqArr[idx]--; 
        }

        for(let i of freqArr){
            if(i != 0){
                return false;
            }
        }
        return true;

       
    }
}
