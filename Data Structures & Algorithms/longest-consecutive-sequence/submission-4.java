class Solution {
    public int longestConsecutive(int[] nums) {

        // HashSet

        if(nums.length == 1){
            return 1;
        }
        if(nums.length == 0){
            return 0;
        }

        HashSet<Integer> numsSet = new HashSet<>();

        for(Integer num : nums){
            numsSet.add(num);
        }

        int longestLength = 0;
        int currentLength = 0;
        

        for(int num : numsSet){
            if(numsSet.contains(num - 1)){
                currentLength++;
            } else {
                if(numsSet.contains(num + 1)){
                    currentLength++;
                }
            }
        }

        return Math.max(longestLength, currentLength);
    }
}
