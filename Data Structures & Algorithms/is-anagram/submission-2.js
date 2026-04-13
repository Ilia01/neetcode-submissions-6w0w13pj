class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const hash = {};

        if (s.length !== t.length) return false;

        for (let i = 0; i < s.length; i++) {
            let firstChar = s[i];
            let secondChar = t[i];

            hash[firstChar] = (hash[firstChar] || 0) + 1;
            hash[secondChar] = (hash[secondChar] || 0) - 1;
        }

        for (const key in hash) {
            if (hash[key] !== 0) return false;
        }

        return true;
    }
}