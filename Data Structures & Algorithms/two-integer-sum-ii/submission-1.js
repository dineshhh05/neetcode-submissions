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

            if(numbers[left] + numbers[right] > target){
                right--;
                continue;
            }

            if(numbers[left] + numbers[right] < target){
                left++;
                continue;
            }

            left++;
            right--;
        }

        return [left + 1, right + 1];
    }
}
