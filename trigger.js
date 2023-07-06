const toCamelCase = (word) => {
    // split the word at the dashes and nderscores
    let spl = word.split(/[_-]+/)

    // take the first word as it is to remain the same
    let first = spl[0];

    // loop through remaining words and capitalize the first letter
    for(let i = 1; i < spl.length; i++) {
        first += spl[i][0].toUpperCase() + spl[i].substring(1);
    }

    if (word.length > 0) return first;
    return "";
}

console.log(toCamelCase("do_Dat_ting"));