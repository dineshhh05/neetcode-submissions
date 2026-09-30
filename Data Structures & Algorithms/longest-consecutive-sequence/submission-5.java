class Solution {
    public int longestConsecutive(int[] nums) {
                
        HashSet<Integer> numsSet = new HashSet<>();

        for (int num : nums) {
            numsSet.add(num);
        }

        int longestLength = 0;

        for (int num : numsSet) {

            // Only start counting if this is the beginning
            // of a sequence
            if (!numsSet.contains(num - 1)) {

                int currentLength = 1;
                int currentNum = num;

                while (numsSet.contains(currentNum + 1)) {
                    currentNum++;
                    currentLength++;
                }

                longestLength = Math.max(longestLength, currentLength);
            }
        }

        return longestLength;
    }
}
