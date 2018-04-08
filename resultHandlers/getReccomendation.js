

function findMaxIDX(results){
  let resultArray = Object.values(results)
  let currentMax = 0
  let idxMax = 0
  resultArray.map((x, idx) => {
    //console.log(idx)
    if(x > currentMax){
      currentMax = resultArray[idx]
      idxMax = idx
    }
  })
  return idxMax
}

function getMove(idx, results){
  return Object.keys(results)[idx]
}

module.exports = {findMaxIDX: findMaxIDX, getMove: getMove}
