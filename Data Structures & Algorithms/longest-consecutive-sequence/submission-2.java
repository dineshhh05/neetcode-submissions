class Solution {
    public int longestConsecutive(int[] nums) {

        // HashSet

        if(nums.length == 1){
            return 1;
        }

        HashSet<Integer> numsSet = new HashSet<>();

        for(Integer num : nums){
            numsSet.add(num);
        }

        // start of the sequence can only be a num if num-1 does not exist in nums

        int lengthLCS = 1;
        

        for(int num : numsSet){
            if(numsSet.contains(num - 1)){
                lengthLCS++;
            }
        }

        return lengthLCS;
    }
}
