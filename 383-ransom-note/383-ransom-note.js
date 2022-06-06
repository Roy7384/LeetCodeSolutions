/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    
    const ransomMap = {};
    const magMap = {};
    
    for (let i = 0, n = ransomNote.length; i < n; i ++) {
        const char = ransomNote[i];
        
        if (ransomMap[char]) {
            ransomMap[char] ++;
        } else {
            ransomMap[char] = 1; 
        }
    }
    
    for (let i = 0, n = magazine.length; i < n; i ++) {
        const char = magazine[i];
        
        if (magMap[char]) {
            magMap[char] ++;
        } else {
            magMap[char] = 1; 
        }
        
    }
    
    for (const char in ransomMap) {
        if (!magMap[char] || ransomMap[char] > magMap[char]) return false;
    }
    
    return true;
};