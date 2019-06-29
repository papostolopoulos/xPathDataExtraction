var arr = [
  ["Hello there", "How are you", "I am great thank you", "That is good to hear"],
  [1, 2, 3, 4],
  [null, null, null, null]
]

function arrayFlip(arr) {
  console.log("In the arrayFlip");
  let endArr = [];

  for (let i = 0; i < arr[0].length; i++) {
    endArr.push([]);
  }

  for (let j = 0; j < arr.length; j++) {
    for (let k = 0; k < arr[j].length; k++) {
      endArr[k].push(arr[j][k]);
    }
  }

  return endArr;
}


function helloThere(name) {
  return "Hello" + name;
}


LOOK AT LINE 878. DO YOU NEED TO OPEN THIS? ANSWER: NOT AT THIS LINE
YOU PROBABLY NEED TO MOVE THIS SOMEWHERE ELSE. SO THAT THE ARRAY IS MODIFIED AGAIN
BEFORE THE FUNCTION INVOCATIONÍ
