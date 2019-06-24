function haCounter(arr) {
  if (arr){
var jmlHa = arr.match(/ha/g) || []
return jmlHa.length
  }

}

function theLaughter(arr) {

var mostlaugh = haCounter(arr[0][1])
var result = arr[0][0]

for (var i = 0; i < arr.length; i++){

  if (haCounter(arr[i][1]) > mostlaugh){
    mostlaugh = haCounter(arr[i][1])
    result = arr[i][0]
  }

}
return result
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

