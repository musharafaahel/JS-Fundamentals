let day = "tuesday  ";
console.log(day.length);
console.log(day.slice(0, 4));
console.log(day[1]);
// tue day
let splitDay = day.split("s");
console.log(splitDay[1] + "|");
console.log(splitDay[1].trim() + "|");

let date = "23";
let nextDate = "27";
console.log(nextDate - date); // 4
let diff = parseInt(nextDate) - parseInt(date);
console.log(diff); // 4
console.log(diff.toString()); // 4

let newQuote = day + "is funday day";
console.log(newQuote);

let val = newQuote.indexOf("day", 5);
console.log(val); // 3

let val1 = newQuote.indexOf("day", 5);
let count = 0;
while (val1 !== -1) {
  count++;
  console.log(val1);
  val1 = newQuote.indexOf("day", val1 + 1);
}
console.log("Count:", count);
