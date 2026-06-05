class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = {};

        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            let sub = target - num;

            if (isFinite(map[sub])) {
                return [map[sub], i]
            }
            if (!map[num]) {
                map[num] = i;
            }
            console.log(map)

        };

        return []
    }
}
