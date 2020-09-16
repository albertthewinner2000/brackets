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
                    for (var i = 1, counter = 0; i < arr.length; i++) {
                        if (
                            i % 2 === 1 &&
                            arr[i] === pairBracket &&
                            counter % 2 === 0
                        ) {
                            pairBracketIndex = i;
                            console.log(
                                `index ${i} value:${arr[i]} passed, pair Index: ${pairBracketIndex}`
                            );
                            break;
                        } else {
                            counter += arr[i] === currentBracket ? 1 : 0;
                            console.log(
                                `index ${i} value:${arr[i]} did not passed, pair Index: ${pairBracketIndex}`
                            );
                        }
                    }
                } else {
                    //stage3.2 (brackets in pair is same)
                    console.log(`go stage 3.2`);
                    for (
                        var i = 1, leftSideCounter = (rigthSideCounter = 0);
                        i < arr.length;
                        i++
                    ) {
                        if (
                            i % 2 === 1 &&
                            arr[i] === pairBracket &&
                            arr[i + 1] !== pairBracket &&
                            leftSideCounter === rigthSideCounter
                        ) {
                            console.log(
                                `index ${i} value:${arr[i]} passed, pair Index: ${pairBracketIndex}`
                            );
                            pairBracketIndex = i;
                            break;
                        } else {
                            console.log(
                                `index ${i} value:${arr[i]} did not passed, pair Index: ${pairBracketIndex}`
                            );
                            switch (arr[i]) {
                                case currentBracket:
                                    leftSideCounter++;
                                    break;
                                case pairBracket:
                                    rigthSideCounter++;
                                    break;
                            }
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

const result = check("111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222", config);
// const result = 3%2

console.log(result);
