let allHex = []
let homeBtns = []
let roadBtns = []


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const btnContainer = document.getElementById("btnContainer")

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

function createHex(hex){
  hex.draw(ctx)
}

function drawHex(){
  let x = 0
  let y = 100
  // #region Hex Math
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
  // #endregion
  allHex.forEach(hex => {
    createHex(hex)
  })
}

class roadButton {
  constructor(posX, posY, buttonId) {
    this.posX = posX
    this.posY = posY
    this.buttonId = buttonId
  }
}

function drawButton(){
  let template = ""
  let id = 1
  let x = 320
  let y = 279

  //#region Home Buttons
  for(let i = 0; i < 3; i++){
    let newBtn = new roadButton(x + "px", y + "px")
    y += 138
    homeBtns.push(newBtn)
  }
  x = 280
  y = 212
  for(let i = 0; i < 4; i++){
    let newBtn = new roadButton(x + "px", y + "px")
    y += 137
    homeBtns.push(newBtn)
  }
  x = 199
  y = 212
  for(let i = 0; i < 4; i++){
    let newBtn = new roadButton(x + "px", y + "px")
    y += 137
    homeBtns.push(newBtn)
  }
  x = 160 
  y = 144
  for(let i = 0; i < 5; i++){
    let newBtn = new roadButton(x + "px", y + "px")
    y += 137
    homeBtns.push(newBtn)
  }
  x = 79 
  y = 144
  for(let i = 0; i < 5; i++){
    let newBtn = new roadButton(x + "px", y + "px")
    y += 137
    homeBtns.push(newBtn)
  }
  x = 40 
  y = 76
  for(let i = 0; i < 6; i++){
    let newBtn = new roadButton(x + "px", y + "px")
    y += 137
    homeBtns.push(newBtn)
  }
  x = -40
  y = 76
  for(let i = 0; i < 6; i++){
    let newBtn = new roadButton(x + "px", y + "px")
    y += 137
    homeBtns.push(newBtn)
  }
  x = -79
  y = 144
  for(let i = 0; i < 5; i++){
    let newBtn = new roadButton(x + "px", y + "px")
    y += 137
    homeBtns.push(newBtn)
  }
  x = -159
  y = 144
  for(let i = 0; i < 5; i++){
    let newBtn = new roadButton(x + "px", y + "px")
    y += 137
    homeBtns.push(newBtn)
  }
  x = -199
  y = 212
  for(let i = 0; i < 4; i++){
    let newBtn = new roadButton(x + "px", y + "px")
    y += 137
    homeBtns.push(newBtn)
  }
  x = -279
  y = 212
  for(let i = 0; i < 4; i++){
    let newBtn = new roadButton(x + "px", y + "px")
    y += 137
    homeBtns.push(newBtn)
  }
  x = -319
  y = 280
  for(let i = 0; i < 3; i++){
    let newBtn = new roadButton(x + "px", y + "px")
    y += 137
    homeBtns.push(newBtn)
  }
  //#endregion
  
  //#region Road Buttons



  //#endregion

  homeBtns.forEach(btn => {
    btn.buttonId = id
    id++
    template += `
    <button id="" style="margin-left: ${btn.posX}; margin-top: ${btn.posY}; z-index: 1;" onclick=""></button>
    `
  })
  btnContainer.innerHTML = template
}

drawButton()
drawHex()
console.log(homeBtns)
