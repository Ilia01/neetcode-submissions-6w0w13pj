class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = {};

        for (let i = 0; i < strs.length; i++) {
            let str = strs[i].split('').sort().join('')

            if (!map[str]) {
                map[str] = [strs[i]]
                continue
            }
            map[str].push(strs[i])
       }

        return Object.values(map);
    }
}
