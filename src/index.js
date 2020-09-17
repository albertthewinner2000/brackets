module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 === 0) {
        //stage 0 (even length)
        const config = bracketsConfig.flat();
        let arr = str.split(""),
            currentBracket = str[0],
            pairBracket = config[config.indexOf(currentBracket) + 1],
            pairBracketIndex = 1;
        while (arr.length > 0) {
            if (config.indexOf(currentBracket) % 2 !== 0) {
                //stage 1 (first bracket in array is not wrong)
                return false;
            } else {
                if (currentBracket === pairBracket) {
                    //stage3.1 (brackets in pair is same)
                    for (var i = 1, counter = 0; i < arr.length; i++) {
                        if (
                            i % 2 === 1 &&
                            arr[i] === pairBracket &&
                            counter % 2 === 0
                        ) {
                            pairBracketIndex = i;

                            break;
                        } else {
                            counter += arr[i] === currentBracket ? 1 : 0;
                        }
                    }
                } else {
                    //stage3.2 (brackets in pair is same)
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
                            pairBracketIndex = i;
                            break;
                        } else {
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
                if (i >= arr.length && pairBracketIndex !== i) {
                    return false;
                }
                //stage 4 (change array, first bracket and pair)
                delete arr[pairBracketIndex];
                arr = arr.filter(() => true);
                arr.shift();
                currentBracket = arr[0];
                pairBracket = config[config.indexOf(currentBracket) + 1];
            }
        }
        //stage 5 (return true if all conditions passed)
        return true;
    }
    return false;
};


