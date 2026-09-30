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

        int lengthLCS = 0;


        for(int i=0; i<nums.length; i++){
            if(numsSet.contains((nums[i] - 1))){
                lengthLCS++;
            }
        }

        return lengthLCS;
    }
}
