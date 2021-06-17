// testing regex with basic strings

const entries = [
    '1-3 a: abcde',
    '1-3 b: cdefg',
    '2-9 c: ccccccccc',
]

function test(entries) {
    var str = entries
    // this one works but passing in entries doesnt
    // var str = '1-3 a: abcde'
    var matches = str.match(/(\d+)/)
        return matches
}

console.log(test())

// function test2() {
//     var str = 't3345his i67s 8my99 s0t0ri9ng '
//     var matches = str.match(/\d+/g)

//     if (matches) {
//         return matches
//     }
// }

// console.log(test2())

