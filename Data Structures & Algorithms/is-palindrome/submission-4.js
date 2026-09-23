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
                console.log("## Break point:")
                console.log("front: " + str.charAt(front));
                console.log("back: " + str.charAt(back) + "\n");

                return false;
            }

            console.log("front: " + str.charAt(front));
            console.log("back: " + str.charAt(back) + "\n");

            front++;
            back--;
        }

        return true;
    }
}
