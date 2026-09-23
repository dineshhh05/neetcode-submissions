class Solution {
    public int maxArea(int[] heights) {

        int ptr1 = 0;
        int ptr2 = heights.length - 1;

        int maxVolume = Math.min(heights[ptr1], heights[ptr2]) * (ptr2 - ptr1);

        while(ptr1 < ptr2){

            int currentVolume = Math.min(heights[ptr1], heights[ptr2]) * (ptr2 - ptr1);

            maxVolume = Math.max(maxVolume, currentVolume);

            if(heights[ptr1] > heights[ptr2]){
                ptr2--;
            } else {
                ptr1++;
            }
        }

        return maxVolume;

    }
}
