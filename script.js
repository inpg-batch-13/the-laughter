function haCounter(arr) {

  var jmlHa = arr.match(/ha/g)
  return jmlHa.length
  
}

function theLaughter(arr) {

}

// TEST CASE
console.log(haCounter('haha')) // 2
console.log(haCounter('hahaha')) // 3

console.log(theLaughter([
  ['Tony', 'haha, get lost, squidward!'],
  ['Mantis', 'hahahahahahaha'],
  ['Thanos', 'I am inevitable'],
  ['Rocket', 'Boom! hahahaha']
])) // 'Mantis'

