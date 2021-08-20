// --- Part Two ---

// Each policy actually describes two positions in the password, where 1 means the first character, 
// 2 means the second character, and so on. (Be careful; Toboggan Corporate Policies have no concept of "index zero"!) 
// Exactly one of these positions must contain the given letter. Other occurrences of the letter are irrelevant for the purposes of policy enforcement.

// Given the same example list from above:

// 1-3 a: abcde is valid: position 1 contains a and position 3 does not.
// 1-3 b: cdefg is invalid: neither position 1 nor position 3 contains b.
// 2-9 c: ccccccccc is invalid: both position 2 and position 9 contain c.
// How many passwords are valid according to the new interpretation of the policies?

const fs = require('fs')
const entries = fs.readFileSync('day2.txt', {encoding: 'utf-8'}).split('\n')

function getNumOne (line) {
    return parseInt(line.split('-')[0]) - 1
}

function getNumTwo(line) {
    return parseInt(line.split('-')[1].split(' ')[0]) - 1
}

function getChar(line) {
    return line.split(':')[0].split(' ')[1]
}

function getPwd(line) {
    return line.split(': ')[1]
}

function lineContainsValidPwd(line) {
    let char = getChar(line)
    let pwd = getPwd(line)
    let pos1 = getNumOne(line)
    let pos2 = getNumTwo(line)
    if (char === pwd[pos1] && char !== pwd[pos2]) return true
    if (char !== pwd[pos1] && char === pwd[pos2]) return true
    return false
}

function checkingHowManyPwdAreCorrect(lines) {
    var validPasswords = 0
    for(let i = 0; i < lines.length; i++) {
        if(lineContainsValidPwd(lines[i])) {
            validPasswords++
        }
    }
    return validPasswords
}


console.log(checkingHowManyPwdAreCorrect(entries))
