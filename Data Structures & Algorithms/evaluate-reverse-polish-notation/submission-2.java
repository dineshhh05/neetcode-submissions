class Solution {

    public int performOperationFromString(String op, int val1, int val2){
        switch(op){
            case "+":
            return val1 + val2;

            case "-":
            return val1 - val2;

            case "*":
            return val1 * val2;

            case "/":
            return val1 / val2;
        }

        return 0;
    }

    

    public int evalRPN(String[] tokens) {

        Stack<Integer> stack = new Stack<>();

        Set<String> operationSet = new HashSet<>();
            operationSet.add("+");
            operationSet.add("-");
            operationSet.add("*");
            operationSet.add("/");


        for(String token : tokens){

            if(operationSet.contains(token)){
                int val2 = stack.pop();
                int val1 = stack.pop();
                int result = performOperationFromString(token, val1, val2);

                stack.push(result);

                continue;
            }

            int num = Integer.parseInt(token);

            if(num >= -200 && num <= 200){
                stack.push(num);
            }

        }

        return stack.pop();


    }
}
