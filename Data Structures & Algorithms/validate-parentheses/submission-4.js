class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let stack = [];

        // s        =      ([   

        // Stack    =      [ ")", "]"]

        if(s.length == 1 ){
            return false;
        }

        if(s.length == 0){
            return true;
        }
 
        while(  s.charAt(s.length - 1) == ")" || 
                s.charAt(s.length - 1) == "]" || 
                s.charAt(s.length - 1) == "}"
            ) {

            stack.push(s.charAt(s.length -1));

            s = s.substring(0, s.length - 1);
        }

        while(  s.charAt(s.length - 1) == "(" || 
                s.charAt(s.length - 1) == "[" || 
                s.charAt(s.length - 1) == "{"
            ) {

            if( s.charAt(s.length - 1) == "{" && stack[stack.length - 1] != "}" ||
                s.charAt(s.length - 1) == "(" && stack[stack.length - 1] != ")" ||
                s.charAt(s.length - 1) == "[" && stack[stack.length - 1] != "]"
            ) {
                return false;
            } else {
                stack.pop();
                s = s.substring(0, s.length - 1);
            }
        }

        return true;


    }
}
