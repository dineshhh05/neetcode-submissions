class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let str = s.toLowerCase();

        let front = 0;
        let back = str.length - 1; 

        while(front < back){

            if(!/[a-z0-9]/.test(str.charAt(front))){
                front++;
                continue;
            }

            if(!/[a-z0-9]/.test(str.charAt(back))){
                back--;
                continue;
            }

            if(str.charAt(front) != str.charAt(back)){
                return false;
            }

            front++;
            back--;
        }

        return true;
    }
}
