
function getMove(output){
   return matchIdxToName(getIdx(output), output)
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

function matchIdxToName(idx, output){
  return Object.keys(output)[idx]
}

module.exports = getMove
