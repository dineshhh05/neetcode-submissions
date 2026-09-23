class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        this.quickSort(nums, 0, nums.length-1);

        let output = [];

        let prevKey;

        // -2, 0, 0, 2, 2

        for(let i = 0; i<nums.length - 2; i++){

            let key;
            if(prevKey == nums[i]){
                continue;
            } else {
                key = nums[i];
                prevKey = key;
            }

            let right = i + 1;
            let left = nums.length - 1;
            let diff = 0 - key;

            while(right < left){
                if(nums[right] + nums[left] > diff){
                    left--;
                    continue;

                } else if (nums[right] + nums[left] < diff){
                    right++;
                    continue;

                } else if ( nums[right] + nums[left] == diff){
                    output.push([key, nums[right], nums[left]]);

                    while(right < left && nums[right] == nums[right+1]) {
                        right++;
                    }

                    while(right < left && nums[left] == nums[left-1]) {
                        left--;
                    }

                    right++;
                    left--;
                }
            }
        }

        return output;
    }

    quickSort(arr, start, end){

        if (start >= end) return;

        let pivotIndex = this.partition(arr, start, end);

        this.quickSort(arr, start, pivotIndex - 1);      //left sort
        this.quickSort(arr, pivotIndex + 1, end);        //right sort
    }

    partition(arr, start, end){

        // random pivot
        let pivotIndex = Math.floor(Math.random() * (end - start + 1) + start);

        // swap pivot with the last element:
        let temp1 = arr[pivotIndex];
        arr[pivotIndex] = arr[end];
        arr[end] = temp1;

        let pivotVal = arr[end];


        let i = start - 1;

        for(let j = start; j<end; j++){
            if(arr[j] <= pivotVal){
                i++;

                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }

        let temp2 = arr[i+1];
        arr[i+1] = arr[end];
        arr[end] = temp2;

        return i+1;
    }
}
