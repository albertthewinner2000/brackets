// module.exports =
function check(str, bracketsConfig) {
    if (str.length % 2 === 0) {
        const config = bracketsConfig.flat();
        let arr = str.split(""),
            currentBracket = str[0],
            pairBracket = config[config.indexOf(currentBracket) + 1],
            pairBracketIndex = 1;
        // findPair = false;
        console.log(arr, currentBracket, pairBracket);
        while (arr.length > 0) {
            //currnent bracket validation
            if (config.indexOf(currentBracket) % 2 !== 0) {
                console.log("currnent bracket vaidation no passed");
                return false;
            } else {
                //pairBracket searching
                // for (let i = 1; i < arr.length; i++) {
                for (var i = 1; i < arr.length; i += 2) {
                    console.log("pairBracket searching");
                    console.log(pairBracket);
                    if (
                        // i % 2 !== 0 &&
                        arr[i] === pairBracket &&
                        arr[i + 1] !== pairBracket
                    ) {
                        pairBracketIndex = i;
                        // findPair = true;
                        console.log(
                            `pair rigth, index: ${i}, pairIndex:${pairBracketIndex}`
                        );
                        console.log(
                            arr,
                            currentBracket,
                            pairBracket,
                            pairBracketIndex
                        );
                        break;
                        // break?
                    } else {
                        // findPair = false;
                        console.log("wrong pair, go next");
                    }
                }
                console.log(`loop index: ${i}`);
                if (--i >= arr.length && pairBracketIndex !== i) {
                    console.log(`loop doesn't find a pair`);
                    return false;
                }
                //Change arr
                delete arr[pairBracketIndex];
                arr = arr.filter(() => true);
                arr.shift();
                //currentBracket change
                console.log("array change");
                currentBracket = arr[0]; //currentBracket change
                pairBracket = config[config.indexOf(currentBracket) + 1];
                console.log(arr, currentBracket, pairBracket, pairBracketIndex);
            }
        }
        return true;
    }
    return false;
}

let result = check(
    "||",[['|','|']]
    
);

// let result = 1%2 !==0;

console.log(result);
