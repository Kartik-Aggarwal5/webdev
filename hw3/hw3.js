function max(iterable, key) {
    var maximum = iterable[0];
    for (var x of iterable) {
      var y = key(x);
      if (y >= key(maximum)) {
        maximum = x;
      }
      // console.log(x,y)
    }
    return maximum;
  }

console.log(max([1,2,8,4,2,7], (x) => x*x));

const reverser = (x) => -x;



function changer(object, key, value) {
  var prev = object[key];
  // console.log(prev)
  if (Array.isArray(prev)) {
    prev.push(value);
  } else if (typeof prev == 'object' && prev != null) {
    prev.key = value;
  } else {
    prev = value;
  }

  return null;
}

var object = { nam: [1,2,3]}
changer(object, 'nam', 5)
console.log(object)




async function promise_me(truthy) {
  const a = new Promise((resolve, reject) => {
      console.log(1)
      resolve(5)
  })
  console.log(2)
  console.log(3)
  console.log(4)
  const five = await a
  console.log(five)
  return five
}

promise_me(3)
