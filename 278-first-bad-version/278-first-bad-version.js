/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        
        let badVer = n;
        let versionToCheck = Math.floor(n / 2);
        let prevChecked = 0;
        
        while (badVer > 1) {
           
            if (isBadVersion(versionToCheck)) {
                badVer = versionToCheck;
                versionToCheck = Math.floor((versionToCheck + prevChecked) / 2); 
            } else if (badVer - 1 === versionToCheck) { 
                return badVer;
            } else {
                prevChecked = versionToCheck;
                versionToCheck = Math.floor((badVer + versionToCheck) / 2)
            }
            
        }
        return 1;
    };
};