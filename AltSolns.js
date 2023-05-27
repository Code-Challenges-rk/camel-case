function toCamelCase(str) {
  return str
    .split(/-|_/g)
    .map(
      (w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)
    )
    .join("");
}

// let str = "the-stealth-warrior".split(/-|_/g)
// console.log(str);

// let m = str.map(
//     (w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)
// )
// console.log(m.join(''));

function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

// let str = "the-stealth-warrior".replace(/[-_](.)/g, (_, c) => c)

// console.log(str);
