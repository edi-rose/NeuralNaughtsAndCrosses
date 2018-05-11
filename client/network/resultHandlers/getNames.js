
/* This file takes the output of the networks and turns it into a list of
reccommendations that the client can then interperate and then make it's move.*/

function getNames(output){
   return matchArrToNames(sortOutput(output), output)
}

function sortOutput(output){
  let sortedArray = Object.values(output)
  sortedArray.sort(function(a, b){return b - a})
  return sortedArray
}

function matchArrToNames(Arr, output){
  let Names = []
  for (var i = 0; i < Arr.length; i++) {
      Object.keys(output).forEach(function(key){
        if(output[key] == Arr[i]){
          Names.push(key)
        }
      })
  }
  return Names
}

module.exports = getNames
