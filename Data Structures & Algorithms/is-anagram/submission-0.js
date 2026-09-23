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

        // 26 letters
        let freqArray = new Array(26).fill(0);

        for(let i=0; i<s.length; i++){
            let idxS = s.charCodeAt(i) - 'a'.charCodeAt(0);
            freqArray[idxS]++;

            //subtract at idx where t is
            let idxT = t.charCodeAt(i) - 'a'.charCodeAt(0);
            freqArray[idxT]--;
        }

        for(let i=0; i<freqArray.length; i++){
            if(freqArray[i] != 0){
                return false;
            }
        }

        return true;
        
    }
}
