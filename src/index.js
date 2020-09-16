// module.exports =
function check(str, bracketsConfig) {
    if (str.length % 2 === 0) {
        //stage 0 (even length)
        const config = bracketsConfig.flat();
        let arr = str.split(""),
            currentBracket = str[0],
            pairBracket = config[config.indexOf(currentBracket) + 1],
            pairBracketIndex = 1;
        let j = 0; //j- counter
        console.log(arr);
        while (arr.length > 0) {
            console.log(`new iteration ${j++}`);
            if (config.indexOf(currentBracket) % 2 !== 0) {
                //stage 1 (first bracket in array is not wrong)
                return false;
            } else {
                if (currentBracket === pairBracket) {
                    //stage3.1 (brackets in pair is same)
                    console.log(`go stage 3.1`);
                    for (var i = 1; i < arr.length; i += 2) {
                        if (arr[i] === pairBracket) {
                            pairBracketIndex = i;
                            console.log(`index ${i} value:${arr[i]} passed, pair Index: ${pairBracketIndex}`)
                            break;
                        } else {
                            console.log(`index ${i} value:${arr[i]} did not passed, pair Index: ${pairBracketIndex}`)
                        }
                    }
                } else {
                    //stage3.2 (brackets in pair is same)
                    console.log(`go stage 3.2`);
                    for (var i = 1; i < arr.length; i += 2) {
                        if (
                            arr[i] === pairBracket &&
                            arr[i + 1] !== pairBracket
                            ) {
                                console.log(`index ${i} value:${arr[i]} passed, pair Index: ${pairBracketIndex}`)
                                pairBracketIndex = i;
                                break;
                            } else {
                                console.log(`index ${i} value:${arr[i]} did not passed, pair Index: ${pairBracketIndex}`)
                        }
                    }
                }
                if (--i >= arr.length && pairBracketIndex !== i) {
                    return false;
                }
                //stage 4 (change array, first bracket and pair)
                delete arr[pairBracketIndex];
                arr = arr.filter(() => true);
                arr.shift();
                currentBracket = arr[0];
                pairBracket = config[config.indexOf(currentBracket) + 1];
                console.log(
                    `array:${arr}, bracket:${currentBracket}, pair:${pairBracket}, pair index:${pairBracketIndex} counter in loop:${i}`
                );
            }
        }
        //stage 5 (return true if all conditions passed)
        return true;
    }
    return false;
}

const config = [
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
    ["|", "|"],
    ["1", "2"],
    ["3", "4"],
    ["5", "6"],
    ["7", "7"],
    ["8", "8"],
];

const result = check(
    "{[{}]}",
    config
    // const result = check(
    //     "([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())",
    //     config
);
// const result = '([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())'.length

console.log(result);
