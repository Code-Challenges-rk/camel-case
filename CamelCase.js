function toCamelCase(str) {
  let new_str = str.split(/[-_]+/);
  console.log("New_str", new_str);
  let conv = new_str[0];
  if (str === "") {
    return "";
  } else {
    for (let c = 1; c < new_str.length; c++) {
      let word = new_str[c];
      console.log(word);
      conv += word[0].toUpperCase() + word.substring(1);
    }
    return conv;
  }
}

console.log(toCamelCase("the-stealth-warrior"));