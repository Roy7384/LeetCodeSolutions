/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    const emailGroupLookup = {}
    const emailGroup = [];
    
    for (let j = 0, m = accounts.length; j < m; j++) {
        emailGroup[j] = j;
        const account = accounts[j];
        for (let i = 1, n = account.length; i < n; i++) {
            const email = account[i];
            
            if (!(email in emailGroupLookup)) {
                emailGroupLookup[email] = j;
            } else {
                union(j, emailGroupLookup[email], emailGroup)
            }
        }
    }
    
    const mergedEmails = []; 
    
    for (const email in emailGroupLookup) {
        const group = emailGroupLookup[email];
        
        const actualGroup = find(group, emailGroup);
        if (mergedEmails[actualGroup] === undefined) mergedEmails[actualGroup] = [];
        mergedEmails[actualGroup].push(email)
    }
    
    const result = [];
    for (let i = 0, n = mergedEmails.length; i < n; i++) {
        const emails = mergedEmails[i];
        if (emails) {
            emails.sort();
            result.push([accounts[i][0], ...emails])
        }
    }
    return result;
} 


const union = function(x, y, root) {
    let rootX = find(x, root);
    let rootY = find(y, root);
    if (rootX !== rootY) {
        root[rootX] = rootY;
    }
}

const find = function(x, root) {
    if (root[x] === x) {
        return x
    }
    return root[x] = find(root[x], root);
}

