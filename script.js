function haCounter(arr) {
var stringke = arr.split ('')


var mapnya = stringke.map(function(x){
  
  if (x === 'h'){
  stringke.shift()
  }
})
return stringke.length


}

// TEST CASE
console.log(haCounter('haha')) // 2
console.log(haCounter('hahaha')) // 3

// console.log(theLaughter([
//   ['Tony', 'haha, get lost, squidward!'],
//   ['Mantis', 'hahahahahahaha'],
//   ['Thanos', 'I am inevitable'],
//   ['Rocket', 'Boom! hahahaha']
// ])) // 'Mantis'

