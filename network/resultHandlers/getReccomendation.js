
function getReccomendedSqaureName(output){
   return matchIdxToName(sortOutput(output), output)
}

function getIdx(output){
  let resultArray = Object.values(output)
  let currentMax = 0
  let idxMax = 0
  resultArray.map((x, idx) => {
    if(x > currentMax){
      currentMax = resultArray[idx]
      idxMax = idx
    }
  })
  return idxMax
}

function sortOutput(output){
  let sortedArray = Object.values(output)
  sortedArray.sort(function(a, b){return b - a})
  return sortedArray
}

function matchIdxToName(Arr, output){
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

module.exports = getReccomendedSqaureName
