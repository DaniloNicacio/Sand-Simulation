
// Setup matrix
function make2DArrays(cols, rows){
  let arr = new Array(cols)
  for (let i = 0; i < arr.length; i++){
      arr[i] = new Array(rows)
  }
  return arr
}

let grid
let w = 10
let cols, rows


function setup() {
  createCanvas(200, 200)
  cols = width / w
  rows = height / w
  grid = make2DArrays(cols, rows)
}

function draw() {
  background(220)
}
