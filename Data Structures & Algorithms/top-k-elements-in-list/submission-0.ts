class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequencyMap = new Map();
        for (const num of nums) {
            frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
        }

        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        for (const [num, count] of frequencyMap.entries()) {
            buckets[count].push(num);
        }

        const result = [];
k
        for (let i = buckets.length - 1; i > 0; i--) {
            if (buckets[i].length > 0) {
                if (result.length + buckets[i].length <= k) {
                    result.push(...buckets[i]);
                } else {
                    const remainingNeeded = k - result.length;
                    result.push(...buckets[i].slice(0, remainingNeeded));
                }
            }

            if (result.length === k) {
                break;
            }
        }

        return result;
    }
}
