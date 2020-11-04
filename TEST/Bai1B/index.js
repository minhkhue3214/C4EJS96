function mergeString(string1, string2) {
    let finalString = ``;
    let totalLength = 0;
    if (string1.length > string2.length) {
        totalLength = str1.length;
    } else {
        totalLength = string2.length;
    }
    for (let i = 0; i < totalLength; i++) {
        let char1 = string1[i];
        let char2 = string2[i];
        if (string1[i] == undefined) {
            char1 = ``;
        } else if (string2[i] == undefined) {
            char2 = ``;
        }
        finalString += char1 + char2;
    }``
    return finalString;
}
// console.log(mergeString(`abc`, `123`));
