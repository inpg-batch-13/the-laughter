function haCounter(arr) {
  if (arr){
var jmlHa = arr.match(/ha/g) ||[]
return jmlHa.length
  }
  else {
    return 0
  }

}

function theLaughter(arr) {
  var result = arr.reduce(function (x,y){

    console.log (haCounter(x[1]) > haCounter(y[1]) ? x[0] : y[0] )
    
 }
)
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

