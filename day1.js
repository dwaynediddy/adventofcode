// Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

// For example, suppose your expense report contained the following:

// 1721
// 979
// 366
// 299
// 675
// 1456
// In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

// Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?
const fs = require('fs')
const entries = fs.readFileSync('day1.txt', {encoding: 'utf-8'}).split('\n').filter(x => x).map(x =>parseInt(x))
// console.log(entries)

function moneyCounter(entries) {
    for(i = 0; i < entries.length; i++) {
        for(j = 0; j < entries.length; j++) {
            if(entries[i] + entries[j] === 2020) {
                return entries[i] * entries[j]
            }
        }
    }
}

    
    // --- Part Two ---
    // The Elves in accounting are thankful for your help; one of them even offers you a starfish coin they had left over from a past vacation. 
    // They offer you a second one if you can find three numbers in your expense report that meet the same criteria.
    
    // Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.
    
    // In your expense report, what is the product of the three entries that sum to 2020?

    function moneyCounter2(entries) {
        for(i = 0; i < entries.length; i++) {
            for(j = 0; j < entries.length; j++) {
                for(k = 0; k < entries.length; k++) {
                    if(entries[i] + entries[j] + entries[k] === 2020) {
                        return entries[i] * entries[j] * entries[k]
                    }

                }
            }
        }
    }
    
    
    console.log(moneyCounter(entries))
    console.log(moneyCounter2(entries))