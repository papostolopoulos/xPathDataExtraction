var arr = [
  ["Hello there", "How are you", "I am great thank you", "That is good to hear"],
  [1, 2, 3, 4],
  [null, null, null, null]
]

function arrayFlip(arr) {
  let endArr = [];

  for (let i = 0; i < arr[0].length; i++) {
    endArr.push([]);
  }

  console.log("This is the endArr", endArr);

  for (let j = 0; j < arr.length; j++) {
    for (let k = 0; k < arr[j].length; k++) {
      endArr[k].push(arr[j][k]);
    }
  }

  return endArr;
}
