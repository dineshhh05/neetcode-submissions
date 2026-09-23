class Solution {
    public int[] topKFrequent(int[] nums, int k) {
 
        HashMap<Integer, Integer> freqTable = new HashMap<>();

        for(int i=0; i<nums.length; i++){
           
            if(!freqTable.containsKey(nums[i])){
                freqTable.put(nums[i], 1);
            } else {
                freqTable.put(nums[i], freqTable.get(nums[i])+1);
            }
        }

        PriorityQueue<Map.Entry<Integer, Integer>> minHeap = 
            new PriorityQueue<>((a, b) -> Integer.compare(a.getValue(), b.getValue()));

        for(HashMap.Entry<Integer, Integer> entry : freqTable.entrySet()){
            
            minHeap.add(entry);

            if(minHeap.size() > k){
                minHeap.poll();
            }
        }

        int[] output = new int[k];

        for(int i=0; i<k; i++){
            output[i] = minHeap.poll().getKey();
        }

        return output;
    }
}
