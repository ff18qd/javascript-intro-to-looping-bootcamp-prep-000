function forLoop(array) {
  for (let i = 0; i< 25; i++) {
    if (i === 0) {
      array.push('I am 1 strange loop')
    }
    else
    {
      j = i + 1
      array.push('I am ${j} strange loops')
    }
  }
  return array
}

function whileLoop(n) {
  while(n > 0) {
    console.log(n--)
  }

  return("done")
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
 }

 do {
   array.pop()
 } while (maybeTrue() && array.length > 0);

 return array
}
