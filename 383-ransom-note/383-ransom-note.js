/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    
    const magMap = {};
    
    for (let i = 0, n = magazine.length; i < n; i ++) {
        const char = magazine[i];
        
        if (magMap[char]) {
            magMap[char] ++;
        } else {
            magMap[char] = 1; 
        }
        
    }
    
    for (let i = 0, n = ransomNote.length; i < n; i ++) {
        const char = ransomNote[i];
        
        if (!magMap[char]) return false;
        magMap[char] --;
    }
    
    return true;
};