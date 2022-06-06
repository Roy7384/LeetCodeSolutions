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
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        
        let versionToCheck = Math.floor(n / 2);;
        let badVer = n;
        
        while (badVer > 1) {
            
            if (isBadVersion(versionToCheck)) {
                badVer = versionToCheck;
                versionToCheck = Math.floor(versionToCheck / 2); 
            } else if (badVer - 1 === versionToCheck) { 
                return badVer;
            } else {
                versionToCheck = Math.floor((badVer + versionToCheck) / 2)
            }
            
        }
        return 1;
    };
};