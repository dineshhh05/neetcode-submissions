class MinStack {

    public Stack<Integer> realStack;
    public Stack<Integer> minTrackStack;

    public MinStack() {
        this.realStack = new Stack<>();
        this.minTrackStack = new Stack<>();
    }
    
    public void push(int val) {

        this.realStack.push(val);

        if(minTrackStack.isEmpty() || val <= this.minTrackStack.peek()){
            minTrackStack.push(val);
        }
    }
    
    public void pop() {
        int val = this.realStack.pop();
        if (val == this.minTrackStack.peek()) {
            this.minTrackStack.pop();
        }
    }
    
    public int top() {
        return this.realStack.peek();
    }
    
    public int getMin() {
        return this.minTrackStack.peek();
    }
}
