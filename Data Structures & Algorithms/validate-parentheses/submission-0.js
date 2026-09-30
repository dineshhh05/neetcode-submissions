class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let stack = [];

        while(stack.length != 0){
            let top = s.charAt(s.length - 1);

            if(top == ")" || top == "}" || top == "]"){
                stack.push(s.pop);
                continue;
            } 

            if(top == "(" || top == "{" || top == "["){

                let opening = s.pop(); 
                let closing = stack.pop();

                if(opening == "(" && closing == ")"){
                    continue;
                } else if(opening == "[" && closing == "]"){
                    continue;
                } else if(opening == "{" && closing == "}"){
                    continue;
                } else {
                    return false;
                }
            }
            
        }

        return true;

    }
}
