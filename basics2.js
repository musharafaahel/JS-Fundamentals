const flag = true;
if (!flag) {
  console.log("Flag is true");
} else {
  console.log(flag);
  console.log("Flag is false");
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

i = 0;
do {
  console.log(i);
  i++;
} while (i > 5);

for (let j = 0; j < 5; j++) {
  console.log(j);
}

for (let k = 0; k < 10; k++) {
  if (k % 2 === 0 || k % 5 === 0) {
    if (k === 7) {
      break;
    }
    console.log(k);
  }
}
console.log("Loop is broken");
for (let k = 0; k < 10; k++) {
  if (k % 2 === 0 || k % 5 === 0) {
    console.log(k);
    if (k === 5) {
      continue;
    }
  }
}
