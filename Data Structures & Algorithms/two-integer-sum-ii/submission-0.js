class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let left = 0; 
        let right = numbers.length-1;

        while(left < right && numbers[left] + numbers[right] != target){

            console.log("left: " + numbers[left]);
            console.log("right: " + numbers[right]);
            console.log("sum: " + (numbers[left] + numbers[right]) + "\n");

            if(numbers[left] + numbers[right] > target){

                console.log("sum greater than target!");
                right--;
                continue;
            }

            if(numbers[left] + numbers[right] < target){

                console.log("sum less than target!");
                left++;
                continue;
            }

            left++;
            right--;
        }

        return [left + 1, right+1];
    }
}
