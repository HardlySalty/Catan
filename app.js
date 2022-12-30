let allHex = []
let homeBtns = []
let roadBtns = []
let players = 0
let playerColorInterval
let redPick = ""
let bluePick = ""
let whitePick = ""
let yellowPick = ""
let greenPick = ""
let brownPick = ""
let playerNum = 1

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const btnContainer = document.getElementById("btnContainer")
const playerContainer = document.getElementById("playerContainer")

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
  let new_hex
  let x = 0
  let y = 100
  // #region Hex Math
  for(let i = 0; i < 3; i++){
    x = 500
    y += 92
    new_hex = new Hexagon(x*1.5, y*1.5)
    allHex.push(new_hex)
  }
  y = 54
  for(let i = 0; i < 4; i++){
    x = 420
    y += 92
    new_hex = new Hexagon(x*1.5, y*1.5)
    allHex.push(new_hex)
  }
  y = 8
  for(let i = 0; i < 5; i++){
    x = 340
    y += 92
    new_hex = new Hexagon(x*1.5, y*1.5)
    allHex.push(new_hex)
  }
  y = 54
  for(let i = 0; i < 4; i++){
    x = 260
    y += 92
    new_hex = new Hexagon(x*1.5, y*1.5)
    allHex.push(new_hex)
  }
  y = 100
  for(let i = 0; i < 3; i++){
    x = 180
    y += 92
    new_hex = new Hexagon(x*1.5, y*1.5)
    allHex.push(new_hex)
  }
  // #endregion
  allHex.forEach(hex => {
    createHex(hex)
  })
}

class board_button {
  constructor(posX, posY, buttonId, cls, occupied) {
    this.posX = posX
    this.posY = posY
    this.buttonId = buttonId
    this.cls = cls
    this.occupied = occupied
  }

  createButton(){
    let newBtn
    let id = 1
    let x = 320
    let y = 279
    let cls = ''
    
    //#region Home Buttons 119
    for(let i = 0; i < 3; i++){
      newBtn = new board_button(x + "px", y + "px")
      y += 138
      homeBtns.push(newBtn)
    }
    x = 280
    y = 212
    for(let i = 0; i < 4; i++){
      newBtn = new board_button(x + "px", y + "px")
      y += 137
      homeBtns.push(newBtn)
    }
    x = 199
    y = 212
    for(let i = 0; i < 4; i++){
      newBtn = new board_button(x + "px", y + "px")
      y += 137
      homeBtns.push(newBtn)
    }
    x = 160 
    y = 144
    for(let i = 0; i < 5; i++){
      newBtn = new board_button(x + "px", y + "px")
      y += 137
      homeBtns.push(newBtn)
    }
    x = 79 
    y = 144
    for(let i = 0; i < 5; i++){
      newBtn = new board_button(x + "px", y + "px")
      y += 137
      homeBtns.push(newBtn)
    }
    x = 40 
    y = 76
    for(let i = 0; i < 6; i++){
      newBtn = new board_button(x + "px", y + "px")
      y += 137
      homeBtns.push(newBtn)
    }
    x = -40
    y = 76
    for(let i = 0; i < 6; i++){
      newBtn = new board_button(x + "px", y + "px")
      y += 137
      homeBtns.push(newBtn)
    }
    x = -79
    y = 144
    for(let i = 0; i < 5; i++){
      newBtn = new board_button(x + "px", y + "px")
      y += 137
      homeBtns.push(newBtn)
    }
    x = -159
    y = 144
    for(let i = 0; i < 5; i++){
      newBtn = new board_button(x + "px", y + "px")
      y += 137
      homeBtns.push(newBtn)
    }
    x = -199
    y = 212
    for(let i = 0; i < 4; i++){
      newBtn = new board_button(x + "px", y + "px")
      y += 137
      homeBtns.push(newBtn)
    }
    x = -279
    y = 212
    for(let i = 0; i < 4; i++){
      newBtn = new board_button(x + "px", y + "px")
      y += 137
      homeBtns.push(newBtn)
    }
    x = -319
    y = 280
    for(let i = 0; i < 3; i++){
      newBtn = new board_button(x + "px", y + "px")
      y += 137
      homeBtns.push(newBtn)
    }
    //#endregion
    
    //#region Road Buttons
    //#region horizontal roads LR=120 UD = 69
    x = 224
    y = 212
    for(let i = 0; i < 4; i++){
      newBtn = new board_button(x + "px", y + "px")
      y += 138
      roadBtns.push(newBtn)
    }
    x = 104
    y = 143
    for(let i = 0; i < 5; i++){
      newBtn = new board_button(x + "px", y + "px")
      y += 138
      roadBtns.push(newBtn)
    }
    x = -16
    y = 74
    for(let i = 0; i < 6; i++){
      newBtn = new board_button(x + "px", y + "px")
      y += 138
      roadBtns.push(newBtn)
    }
    x = -136
    y = 143
    for(let i = 0; i < 5; i++){
      newBtn = new board_button(x + "px", y + "px")
      y += 138
      roadBtns.push(newBtn)
    }
    x = -256
    y = 212
    for(let i = 0; i < 4; i++){
      newBtn = new board_button(x + "px", y + "px")
      y += 138
      roadBtns.push(newBtn)
    }
    //#endregion
  
    x = 285
    y = 250
    for(let i = 0; i < 6; i++){
      if(i % 2){
        newBtn = new board_button(x + "px", y + "px", id, cls = "rotateup")
        roadBtns.push(newBtn)
      }else{
        newBtn = new board_button(x + "px", y + "px", id, cls = "rotatedown")
        roadBtns.push(newBtn)
      }
      y += 68.5
    }
    x = 165
    y = 181
    for(let i = 0; i < 8; i++){
      if(i % 2){
        newBtn = new board_button(x + "px", y + "px", id, cls = "rotateup")
        roadBtns.push(newBtn)
      }else{
        newBtn = new board_button(x + "px", y + "px", id, cls = "rotatedown")
        roadBtns.push(newBtn)
      }
      y += 68.5
    }
    x = 45
    y = 112
    for(let i = 0; i < 10; i++){
      if(i % 2){
        newBtn = new board_button(x + "px", y + "px", id, cls = "rotateup")
        roadBtns.push(newBtn)
      }else{
        newBtn = new board_button(x + "px", y + "px", id, cls = "rotatedown")
        roadBtns.push(newBtn)
      }
      y += 68.5
    }
    x = -75
    y = 112
    for(let i = 0; i < 10; i++){
      if(i % 2){
        newBtn = new board_button(x + "px", y + "px", id, cls = "rotatedown")
        roadBtns.push(newBtn)
      }else{
        newBtn = new board_button(x + "px", y + "px", id, cls = "rotateup")
        roadBtns.push(newBtn)
      }
      y += 68.5
    }
    x = -195
    y = 181
    for(let i = 0; i < 8; i++){
      if(i % 2){
        newBtn = new board_button(x + "px", y + "px", id, cls = "rotatedown")
        roadBtns.push(newBtn)
      }else{
        newBtn = new board_button(x + "px", y + "px", id, cls = "rotateup")
        roadBtns.push(newBtn)
      }
      y += 68.5
    }
    x = -315
    y = 250
    for(let i = 0; i < 6; i++){
      if(i % 2){
        newBtn = new board_button(x + "px", y + "px", id, cls = "rotatedown")
        roadBtns.push(newBtn)
      }else{
        newBtn = new board_button(x + "px", y + "px", id, cls = "rotateup")
        roadBtns.push(newBtn)
      }
      y += 68.5
    }
    
  
    //#endregion
  
  }

  drawButton(){
    let template = ""
    let id = 0
    homeBtns.forEach(btn => {
      btn.buttonId = id
      id++
      template += `
      <button id="homeBtn" class="board_button" style="display: none; margin-left: ${btn.posX}; margin-top: ${btn.posY}; z-index: 1;" onclick="homeLog(${btn.buttonId})" disabled="true"></button>
      `
    })
    id = 0
    roadBtns.forEach(btn => {
      btn.buttonId = id
      id++
      template += `
      <button id="roadBtn" class="${btn.cls} board_button" style="display: none; margin-left: ${btn.posX}; margin-top: ${btn.posY}; z-index: 1;" onclick="roadLog(${btn.buttonId})" disabled="true"></button>
      `
    })
    btnContainer.innerHTML += template
  }
  
}

function enableBtn(btn){
  console.log("1")
  const home_buton = document.querySelectorAll(btn)
  home_buton.forEach(btn => {
    btn.removeAttribute("disabled")
    btn.style.display = ""
  })
  if(btn == "#homeBtn"){
    disableBtn('#roadBtn')
  }else{
    disableBtn('#homeBtn')
  }
}

function disableBtn(btn){
  const home_buton = document.querySelectorAll(btn)
  home_buton.forEach(btn => {
    btn.setAttribute("disabled", true)
    btn.style.display = "none"
  })
}

function homeLog(btn){
  console.log(`HOME: ${btn} `)
}

function roadLog(btn){
  console.log(`ROAD: ${btn} `)
}

function drawPieces(){
  let btnTemplate = ""

  btnTemplate = `
      <button style=" left: 100; top: 100; z-index: 1; border:none;" onclick="enableBtn('#homeBtn')">
        <i class="fa-solid fa-house fa-5x pieces"></i>
      </button>
      <button style=" left: 100; top: 200; z-index: 1; border:none;" onclick="enableBtn('#homeBtn')">
        <i class="fa-solid fa-city fa-5x pieces"></i>
      </button>
      <button style=" left: 100; top: 300; z-index: 1; border:none;" onclick="enableBtn('#roadBtn')">
        <i class="fa-solid fa-road fa-5x pieces"></i>
      </button>
      
  `
  playerContainer.innerHTML += btnTemplate
}

function drawColorPick(playerCount){
  players += playerCount
  console.log(players + "1")
  
  let playerAmount = document.getElementById("playerAmount")
  let colorPick = document.getElementById("colorPick")

  playerAmount.style.display = "none"
  playerAmount.setAttribute("disabled", true)
  colorPick.style.display = ""
  playerColor()
}

function playerColor(prevColor){
  console.log(prevColor)
  console.log(players)
  let gameBoard = document.getElementById("gameBoard")
  let colorPick = document.getElementById("colorPick")
  let mainScreen = document.getElementById("mainScreen")
  if(players == 0){
    colorPick.style.display = "none"
    mainScreen.style.display = "none"
    gameBoard.style.display = ""
  }
  switch(prevColor){
    case "red":
      redPick = "none"
      break
    case "blue":
      bluePick = "none"
      break
    case "white":
      whitePick = "none"
      break
    case "yellow":
      yellowPick = "none"
      break
    case "green":
      greenPick = "none"
      break
    case "brown":
      brownPick = "none"
      break
    default:
      console.log("default")
      break
  }
  players--


  let colorPickTemplate = `
  <p style="font-size: 50px; margin-left: 50px;">PICK YOUR COLOR</p>     
    <div style="display: inline;">
      <div style="margin-left: 40;">
        <p style="font-size: 36; text-align: center; font-weight: bold">Player<br>${playerNum}</p>
      </div>
      <div style="margin-left: 30px;">
        <span class="m35"><button class="colorPickBtn" style="background-color: #ff0000; display:${redPick};" onclick="playerColor('red')"></button>
        <span class="m35"><button class="colorPickBtn" style="background-color: #0000ff; display:${bluePick};" onclick="playerColor('blue')"></button>
        <span class="m35"><button class="colorPickBtn" style="background-color: #ffffff; display:${whitePick};" onclick="playerColor('white')"></button>
        <span class="m35"><button class="colorPickBtn" style="background-color: #ffff00; display:${yellowPick};" onclick="playerColor('yellow')"></button>
        <span class="m35"><button class="colorPickBtn" style="background-color: #008000; display:${greenPick};" onclick="playerColor('green')"></button>
        <span class="m35"><button class="colorPickBtn" style="background-color: #5f3d11; display:${brownPick};" onclick="playerColor('brown')"></button>  
      </div>
    </div>`

    colorPick.innerHTML = colorPickTemplate


    playerNum++


}

drawHex() 
boardBase = new board_button
boardBase.createButton()
boardBase.drawButton()
drawPieces()

