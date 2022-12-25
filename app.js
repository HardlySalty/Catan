const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const a = 2 * Math.PI / 6;
const r = 75;

class Hexagon {
  constructor(posX, posY){
    this.posX = posX
    this.posY = posY
  }

  draw(ctx){
    ctx.beginPath()
    for (var i = 0; i < 6; i++) {
      ctx.lineTo(this.posX + r * Math.cos(a * i), this.posY + r * Math.sin(a * i))
    }
    ctx.closePath()
    ctx.stroke()
  }
}

let allHex = []

function createHex(hex){
  hex.draw(ctx)
}

function drawHex(){
  let x = 0
  let y = 100
  //top row
  for(let i = 0; i < 3; i++){
    x = 500
    y += 92
    let new_hex = new Hexagon(x*1.5, y*1.5)
    allHex.push(new_hex)
  }
  y = 54
  for(let i = 0; i < 4; i++){
    x = 420
    y += 92
    let new_hex = new Hexagon(x*1.5, y*1.5)
    allHex.push(new_hex)
  }
  y = 8
  for(let i = 0; i < 5; i++){
    x = 340
    y += 92
    let new_hex = new Hexagon(x*1.5, y*1.5)
    allHex.push(new_hex)
  }
  y = 54
  for(let i = 0; i < 4; i++){
    x = 260
    y += 92
    let new_hex = new Hexagon(x*1.5, y*1.5)
    allHex.push(new_hex)
  }
  y = 100
  for(let i = 0; i < 3; i++){
    x = 180
    y += 92
    let new_hex = new Hexagon(x*1.5, y*1.5)
    allHex.push(new_hex)
  }

  console.log(y)
  allHex.forEach(hex => {
    createHex(hex)
  })
}

drawHex()
